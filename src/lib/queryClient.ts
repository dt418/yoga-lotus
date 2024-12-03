import { QueryClient } from '@tanstack/react-query';

/**
 * Configured instance of QueryClient for managing application-wide query state
 * @remarks
 * This client is configured with optimal settings for caching, retries, and error handling:
 * - Stale time: 5 minutes
 * - Smart retry logic that doesn't retry 404 errors
 * - Disabled window focus refetching
 * - Proper error logging for mutations
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: (failureCount, error) => {
        if (error instanceof Error && error.message.includes('404')) {
          return false; // Don't retry 404 errors
        }
        return failureCount < 2;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
    mutations: {
      retry: 1,
      onError: (error) => {
        console.error('Mutation error:', error);
      },
    },
  },
});
