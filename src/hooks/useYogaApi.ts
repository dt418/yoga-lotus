import type { YogaClass, YogaClassInput } from '~/schemas';
import { useFetch } from './useFetch';

export function useYogaApi() {
  const {
    get,
    post,
    put,
    delete: remove,
    isLoading,
    error,
  } = useFetch<YogaClass>();

  const getYogaClasses = () => {
    return get('/yoga-classes');
  };

  const getYogaClass = (id: string) => {
    return get(`/yoga-classes/${id}`);
  };

  const createYogaClass = (yogaClass: YogaClassInput) => {
    return post('/yoga-classes', yogaClass);
  };

  const updateYogaClass = (id: string, yogaClass: Partial<YogaClassInput>) => {
    return put(`/yoga-classes/${id}`, yogaClass);
  };

  const deleteYogaClass = (id: string) => {
    return remove(`/yoga-classes/${id}`);
  };

  return {
    getYogaClasses,
    getYogaClass,
    createYogaClass,
    updateYogaClass,
    deleteYogaClass,
    isLoading,
    error,
  };
}
