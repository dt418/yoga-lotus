import { useCallback } from 'react';
import { api } from '~/lib/api';
import type { YogaClass, YogaClassQuery } from '~/schemas/yoga';
import { useYogaStore } from '~/stores/yogaStore';

export const useYogaStoreActions = () => {
  const store = useYogaStore();

  const fetchClasses = useCallback(async () => {
    store.setLoading(true);
    try {
      const response = await api.get<YogaClass[]>('/api/yoga/classes');
      store.reset(); // Clear existing classes first
      for (const yogaClass of response) {
        await store.addClass(yogaClass);
      }
    } catch (error) {
      store.setError(
        error instanceof Error ? error.message : 'Failed to fetch classes',
      );
    } finally {
      store.setLoading(false);
    }
  }, [store.addClass, store.setError, store.setLoading, store.reset]);

  const createClass = useCallback(
    async (data: unknown) => {
      store.setLoading(true);
      try {
        const response = await api.post<YogaClass>('/api/yoga/classes', data);
        const newClass = await store.addClass(response);
        return newClass;
      } catch (error) {
        store.setError(
          error instanceof Error ? error.message : 'Failed to create class',
        );
        return null;
      } finally {
        store.setLoading(false);
      }
    },
    [store.addClass, store.setError, store.setLoading],
  );

  const updateClass = useCallback(
    async (id: string, data: unknown) => {
      store.setLoading(true);
      try {
        const response = await api.put<YogaClass>(
          `/api/yoga/classes/${id}`,
          data,
        );
        const updatedClass = await store.updateClass(id, response);
        return updatedClass;
      } catch (error) {
        store.setError(
          error instanceof Error ? error.message : 'Failed to update class',
        );
        return null;
      } finally {
        store.setLoading(false);
      }
    },
    [store.updateClass, store.setError, store.setLoading],
  );

  const deleteClass = useCallback(
    async (id: string) => {
      store.setLoading(true);
      try {
        await api.delete(`/api/yoga/classes/${id}`);
        store.deleteClass(id);
        return true;
      } catch (error) {
        store.setError(
          error instanceof Error ? error.message : 'Failed to delete class',
        );
        return false;
      } finally {
        store.setLoading(false);
      }
    },
    [store.deleteClass, store.setError, store.setLoading],
  );

  const searchClasses = useCallback(
    async (query: YogaClassQuery) => {
      store.setLoading(true);
      try {
        const response = await api.get<YogaClass[]>(
          '/api/yoga/classes/search',
          query,
        );
        store.filterClasses(query);
        return response;
      } catch (error) {
        store.setError(
          error instanceof Error ? error.message : 'Failed to search classes',
        );
        return [];
      } finally {
        store.setLoading(false);
      }
    },
    [store.filterClasses, store.setError, store.setLoading],
  );

  return {
    ...store,
    fetchClasses,
    createClass,
    updateClass,
    deleteClass,
    searchClasses,
  };
};
