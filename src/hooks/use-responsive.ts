"use client";

import { BREAK_POINTS } from "@/config/layout";
import { useMediaQuery } from "react-responsive";

// ----------------------------------------------------------------------

type ReturnType = boolean;

type Query = "up" | "down" | "between" | "only";

export function useResponsive(
  query: Query,
  start: keyof typeof BREAK_POINTS,
  end?: keyof typeof BREAK_POINTS
): ReturnType {
  if (query === "up") {
    return useMediaQuery({ minWidth: BREAK_POINTS[start] });
  }

  if (query === "down") {
    return useMediaQuery({ maxWidth: BREAK_POINTS[start] });
  }

  if (query === "between") {
    return useMediaQuery({
      minWidth: BREAK_POINTS[start],
      maxWidth: end && BREAK_POINTS[end] - 1,
    });
  }

  return useMediaQuery({
    minWidth: BREAK_POINTS[start],
    maxWidth: BREAK_POINTS[end || start] - 1,
  });
}
