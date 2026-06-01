import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const CURSOR_HIDE_STYLE = `
  @media (pointer: fine) {
    body { cursor: none; }
    a, button { cursor: none; }
  }
`;

const HOVERABLE = "a, button, [data-cursor-expand]";

export default function CustomCursor() {
  const isTouch =
    typeof navigator !== "undefined" && navigator.maxTouchPoints > 0;

  // Raw mouse position — shared source of truth
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot follows mouse directly, centered by -4px (half of 8px)
  const dotX = useTransform(mouseX, (v) => v - 4);
  const dotY = useTransform(mouseY, (v) => v - 4);

  // Ring follows mouse with a spring, centered by -14px (half of 28px default)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 18, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 18, mass: 0.8 });

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest(HOVERABLE)) {
        setIsExpanded(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest(HOVERABLE)) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [isTouch, mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CURSOR_HIDE_STYLE }} />

      {/* Small dot — no spring, direct position */}
      <motion.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#ffffff",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />

      {/* Ring — spring-following, expands on interactive elements */}
      <motion.div
        aria-hidden="true"
        style={{
          x: springX,
          y: springY,
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          background: "transparent",
          borderStyle: "solid",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
        initial={{
          width: 28,
          height: 28,
          marginLeft: -14,
          marginTop: -14,
          borderWidth: 1.5,
          borderColor: "rgba(255,255,255,1)",
        }}
        animate={{
          width: isExpanded ? 48 : 28,
          height: isExpanded ? 48 : 28,
          // Centering offset must grow with size: -size/2
          marginLeft: isExpanded ? -24 : -14,
          marginTop: isExpanded ? -24 : -14,
          borderWidth: isExpanded ? 2 : 1.5,
          borderColor: isExpanded ? "var(--accent)" : "rgba(255,255,255,1)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </>
  );
}
