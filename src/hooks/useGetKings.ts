import { useQuery } from '@tanstack/react-query';
import { fetchKings } from '../api/services/fetchKings';

export const useGetKings = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['kings'],
    queryFn: () => fetchKings({}),
  });

  return {
    data,
    isLoading,
    error,
  };
};