import { useQuery } from '@tanstack/react-query';
import { fetchJesus } from '../api/services/fetchJesus';

export const useGetJesus = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['jesus'],
    queryFn: () => fetchJesus({}),
  });

  return {
    data,
    isLoading,
    error,
  };
};