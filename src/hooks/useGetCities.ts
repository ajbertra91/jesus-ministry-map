import { useQuery } from '@tanstack/react-query';
import { fetchCity } from '../api/services/fetchCity';

export const useGetCities = (cityName: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['kings'],
    queryFn: () => fetchCity({ city: cityName }),
  });

  return {
    data,
    isLoading,
    error,
  };
};