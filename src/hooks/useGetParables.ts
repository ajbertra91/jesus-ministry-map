import { useQuery } from '@tanstack/react-query';
import { fetchParables } from '../api/services/fetchParables';

export const useGetParables = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['parables'],
    queryFn: () => fetchParables({}),
  });

  return {
    data,
    isLoading,
    error,
  };
};
