import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { queryClient } from '~/lib/queryClient';

/**
 * Props for the QueryProvider component
 * @interface QueryProviderProps
 */
interface QueryProviderProps {
  /** The child components to be wrapped by the provider */
  children: ReactNode;
}

/**
 * Provider component that wraps the application with react-query's QueryClientProvider
 * This enables the use of react-query hooks throughout the application
 *
 * @param {QueryProviderProps} props - The component props
 * @returns {JSX.Element} The wrapped children with query client context
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <QueryProvider>
 *       <YourApp />
 *     </QueryProvider>
 *   );
 * }
 * ```
 */
export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
