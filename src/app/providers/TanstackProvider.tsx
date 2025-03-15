'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type TanstackProviderProps = {
  children: ReactNode;
};
const queryClient = new QueryClient();

export const TanstackProvider = ({ children }: TanstackProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
