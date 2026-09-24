"use client";

import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** true면 화면 진입이 아니라 첫 렌더 시 재생 (히어로용) */
  onMount?: boolean;
  as?: "div" | "li" | "p" | "h1" | "h2";
};

/**
 * 은은한 fade-up. '동작 줄이기' 사용자는 MotionProvider(reducedMotion="user")가
 * 이동(y)을 없애고 투명도만 전환합니다.
 */
export function FadeUp({ children, className, delay = 0, onMount = false, as = "div" }: Props) {
  const Tag = motion[as];
  const visible = { opacity: 1, y: 0 };

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      {...(onMount
        ? { animate: visible }
        : { whileInView: visible, viewport: { once: true, margin: "0px 0px -80px 0px" } })}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
