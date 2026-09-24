"use client";

import { MotionConfig } from "motion/react";

/** OS의 '동작 줄이기' 설정을 따르도록 전역 지정 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
