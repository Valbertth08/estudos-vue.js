import { QueryClient, QueryClientProvider } from "@tanstack/vue-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

export { QueryClientProvider, queryClient };