"use client";

import { ThemeProvider } from "next-themes";
// import { AppWrapper } from "@/context/state";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute='class'>
      {/* <AppWrapper> */}
      {children}
      {/* </AppWrapper> */}
    </ThemeProvider>
  );
}
