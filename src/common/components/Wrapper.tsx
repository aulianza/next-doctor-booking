"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

import AppBar from "./AppBar";
import Toast from "./Toast";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 1000,
      },
    },
  });

  const pathname = usePathname();

  return (
    <QueryClientProvider client={queryClient}>
      <Toast />
      <main>{children}</main>
      {pathname === "/" || pathname === "/appointment" ? <AppBar /> : null}{" "}
    </QueryClientProvider>
  );
};

export default Wrapper;
