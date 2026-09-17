import { useRouterState } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();
  const firstLoad = useRef(true);

  useEffect(() => {
    firstLoad.current = false;
  }, []);

  const skipEntrance = firstLoad.current || reduced;

  return (
    <motion.div
      key={pathname}
      initial={skipEntrance ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: skipEntrance ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
