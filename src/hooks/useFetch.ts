import { useCallback, useRef, useState } from 'react';
import { api } from '~/lib/api';
import type { FetchOptions, FetchState } from '~/schemas';

interface UseFetchResult<T> {
  /** The response data */
  data: T | null;
  /** Any error that occurred during the request */
  error: Error | null;
  /** Whether a request is currently in progress */
  isLoading: boolean;
  /** Method for making GET requests */
  get: (endpoint: string, options?: FetchOptions) => Promise<T>;
  /** Method for making POST requests */
  post: (endpoint: string, data: unknown, options?: FetchOptions) => Promise<T>;
  /** Method for making PUT requests */
  put: (endpoint: string, data: unknown, options?: FetchOptions) => Promise<T>;
  /** Method for making DELETE requests */
  delete: (endpoint: string, options?: FetchOptions) => Promise<T>;
  /** Method for cancelling the current request */
  cancelRequest: () => void;
}

/**
 * Custom hook for making HTTP requests with built-in state management
 *
 * @example
 * ```jsx
 * const { data, error, isLoading, get } = useFetch<User>();
 *
 * useEffect(() => {
 *   get('/api/user/123', {
 *     onSuccess: (user) => {
 *       console.log('User fetched:', user);
 *     },
 *     onError: (error) => {
 *       console.error('Failed to fetch user:', error);
 *     },
 *   });
 * }, []);
 * ```
 */
export function useFetch<T>(): UseFetchResult<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  // Use refs for tracking request cancellation
  const abortControllerRef = useRef<AbortController | null>(null);

  /**
   * Updates the loading state
   * @param {boolean} isLoading - New loading state
   */
  const setLoading = useCallback((isLoading: boolean): void => {
    setState((prev) => ({ ...prev, isLoading }));
  }, []);

  /**
   * Updates the error state
   * @param {Error | null} error - New error state
   */
  const setError = useCallback((error: Error | null): void => {
    setState((prev) => ({ ...prev, error, isLoading: false }));
  }, []);

  /**
   * Updates the data state
   * @param {T | null} data - New data state
   */
  const setData = useCallback((data: T | null): void => {
    setState((prev) => ({ ...prev, data, isLoading: false, error: null }));
  }, []);

  /**
   * Cancels the current request if one is in progress
   */
  const cancelRequest = useCallback((): void => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
  }, []);

  /**
   * Generic request handler that manages state and error handling
   * @template R - The expected response type
   * @param {Function} requestFn - The function that makes the actual request
   * @param {FetchOptions} [options] - Optional configuration for the request
   * @returns {Promise<R>} The response data
   */
  const handleRequest = useCallback(
    async <R>(
      requestFn: () => Promise<R>,
      options?: FetchOptions,
    ): Promise<R> => {
      try {
        cancelRequest();
        abortControllerRef.current = new AbortController();
        setLoading(true);

        const response = await requestFn();
        setData(response as unknown as T);
        options?.onSuccess?.(response);
        return response;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return undefined as R;
        }
        const err = error instanceof Error ? error : new Error('Unknown error');
        setError(err);
        options?.onError?.(err);
        throw err;
      }
    },
    [setLoading, setData, setError, cancelRequest],
  );

  /** Makes a GET request to the specified endpoint */
  const get = useCallback(
    (endpoint: string, options?: FetchOptions): Promise<T> =>
      handleRequest(() => api.get(endpoint), options),
    [handleRequest],
  );

  /** Makes a POST request to the specified endpoint */
  const post = useCallback(
    (endpoint: string, data: unknown, options?: FetchOptions): Promise<T> =>
      handleRequest(() => api.post(endpoint, data), options),
    [handleRequest],
  );

  /** Makes a PUT request to the specified endpoint */
  const put = useCallback(
    (endpoint: string, data: unknown, options?: FetchOptions): Promise<T> =>
      handleRequest(() => api.put(endpoint, data), options),
    [handleRequest],
  );

  /** Makes a DELETE request to the specified endpoint */
  const remove = useCallback(
    (endpoint: string, options?: FetchOptions): Promise<T> =>
      handleRequest(() => api.delete(endpoint), options),
    [handleRequest],
  );

  return {
    ...state,
    get,
    post,
    put,
    delete: remove,
    cancelRequest,
  };
}
