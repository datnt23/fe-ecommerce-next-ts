"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

// ----------------------------------------------------------------------
export interface ProvidersProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ProvidersProps) => {
  return <NextUIProvider >{children}</NextUIProvider>;
};

export default ThemeProvider;
