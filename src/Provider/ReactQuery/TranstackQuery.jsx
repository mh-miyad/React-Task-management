"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TanStackQuery = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanStackQuery;
