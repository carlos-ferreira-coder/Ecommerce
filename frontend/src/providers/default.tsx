"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface DefaultProvidersProps {
  children: React.ReactNode;
}

export default function DefaultProviders({ children }: DefaultProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>{children}</NuqsAdapter>
    </QueryClientProvider>
  );
}
