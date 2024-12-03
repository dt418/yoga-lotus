import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '~/lib/api';
import type { YogaClass, YogaClassInput } from '~/schemas';

/**
 * Constant query key strings for type safety and reusability
 */
export const QUERY_KEYS = {
  /** Key for yoga classes list query */
  YOGA_CLASSES: 'yoga-classes',
  /** Key for individual yoga class query */
  YOGA_CLASS: 'yoga-class',
} as const;

/**
 * Query key factory functions for consistent key generation
 */
export const queryKeys = {
  /** Query key for fetching all yoga classes */
  yogaClasses: [QUERY_KEYS.YOGA_CLASSES] as const,
  /** Query key factory for fetching a specific yoga class */
  yogaClass: (id: string) => [QUERY_KEYS.YOGA_CLASS, id] as const,
};

/**
 * Hook for fetching all yoga classes
 * @returns {Object} Query result object containing yoga classes data, loading state, and error state
 * @example
 * ```tsx
 * const { data: yogaClasses, isLoading } = useYogaClasses();
 * if (isLoading) return <Loading />;
 * return <YogaClassList classes={yogaClasses} />;
 * ```
 */
export const useYogaClasses = () => {
  return useQuery({
    queryKey: queryKeys.yogaClasses,
    queryFn: async () => {
      try {
        return await api.get<YogaClass[]>('/yoga-classes');
      } catch (error) {
        console.error('Failed to fetch yoga classes:', error);
        throw error;
      }
    },
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

/**
 * Hook for fetching a specific yoga class by ID
 * @param {string} id - The ID of the yoga class to fetch
 * @returns {Object} Query result object containing yoga class data, loading state, and error state
 * @example
 * ```tsx
 * const { data: yogaClass, isLoading } = useYogaClass('123');
 * if (isLoading) return <Loading />;
 * return <YogaClassDetails class={yogaClass} />;
 * ```
 */
export const useYogaClass = (id: string) => {
  return useQuery({
    queryKey: queryKeys.yogaClass(id),
    queryFn: async () => {
      try {
        return await api.get<YogaClass>(`/yoga-classes/${id}`);
      } catch (error) {
        console.error(`Failed to fetch yoga class ${id}:`, error);
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: Boolean(id),
  });
};

/**
 * Hook for creating a new yoga class
 * @returns {Object} Mutation object containing mutate function and mutation state
 * @example
 * ```tsx
 * const { mutate: createClass, isLoading } = useCreateYogaClass();
 * const handleSubmit = (data: YogaClassInput) => {
 *   createClass(data, {
 *     onSuccess: () => {
 *       toast.success('Class created successfully');
 *     },
 *   });
 * };
 * ```
 */
export const useCreateYogaClass = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newClass: YogaClassInput) => {
      try {
        return await api.post<YogaClass>('/yoga-classes', newClass);
      } catch (error) {
        console.error('Failed to create yoga class:', error);
        throw error;
      }
    },
    onSuccess: (newClass) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.yogaClasses });
      // Optimistically update the cache
      queryClient.setQueryData<YogaClass[]>(queryKeys.yogaClasses, (old) =>
        old ? [...old, newClass] : [newClass],
      );
    },
  });
};

/**
 * Hook for updating an existing yoga class
 * @returns {Object} Mutation object containing mutate function and mutation state
 * @example
 * ```tsx
 * const { mutate: updateClass, isLoading } = useUpdateYogaClass();
 * const handleUpdate = (data: Partial<YogaClass>) => {
 *   updateClass({ id: '123', ...data }, {
 *     onSuccess: () => {
 *       toast.success('Class updated successfully');
 *     },
 *   });
 * };
 * ```
 */
export const useUpdateYogaClass = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      ...data
    }: Partial<YogaClass> & { id: string }) => {
      try {
        return await api.put<YogaClass>(`/yoga-classes/${id}`, data);
      } catch (error) {
        console.error(`Failed to update yoga class ${id}:`, error);
        throw error;
      }
    },
    onSuccess: (updatedClass) => {
      // Update both the list and individual queries
      queryClient.invalidateQueries({ queryKey: queryKeys.yogaClasses });
      queryClient.invalidateQueries({
        queryKey: queryKeys.yogaClass(updatedClass.id),
      });

      // Optimistically update the cache
      queryClient.setQueryData<YogaClass[]>(queryKeys.yogaClasses, (old) =>
        old?.map((item) => (item.id === updatedClass.id ? updatedClass : item)),
      );
    },
  });
};
