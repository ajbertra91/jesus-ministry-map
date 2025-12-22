import { useQuery } from '@tanstack/react-query';
import { fetchDaniel11 } from '../api/services/fetchDaniel11';

export const useGetDaniel11 = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['daniel11'],
    queryFn: () => fetchDaniel11({}),
  });

  return {
    data,
    isLoading,
    error,
  };
};