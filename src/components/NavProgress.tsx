import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function NavProgress() {
  const isLoading = useRouterState({
    select: (s) => Boolean(s.isLoading),
  });
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {isLoading && !reduced && (
        <motion.div
          className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden="true"
        >
          <motion.div
            className="h-full origin-left bg-coral"
            initial={{ scaleX: 0.08 }}
            animate={{ scaleX: 0.82 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
