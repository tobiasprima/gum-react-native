import { useQuery } from '@tanstack/react-query';
import { Specialist } from '../types/Specialist';
import { fetchSpecialists } from '../api/specialistApi';

export const specialistsQueryKey = ['specialists'];

export const useSpecialists = () => {
  return useQuery<Specialist[], Error>({
    queryKey: specialistsQueryKey,
    queryFn: fetchSpecialists,
  });
};
