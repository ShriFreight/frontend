"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

type Props = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
};

const initialTransform = (dir: Direction, distance: number) => {
  switch (dir) {
    case "up":
      return `translate3d(0, ${distance}px, 0)`;
    case "down":
      return `translate3d(0, -${distance}px, 0)`;
    case "left":
      return `translate3d(${distance}px, 0, 0)`;
    case "right":
      return `translate3d(-${distance}px, 0, 0)`;
    case "scale":
      return "scale(0.94)";
    default:
      return "none";
  }
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 24,
  className,
  once = true,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform(direction, distance),
        transition: `opacity ${duration}ms cubic-bezier(.22,.61,.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(.22,.61,.36,1) ${delay}ms`,
        willChange: visible ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
