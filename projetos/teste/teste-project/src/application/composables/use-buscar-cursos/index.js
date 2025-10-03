import { buscarPessoas } from "@/domain/services/get-pessoas";
import { useQuery } from '@tanstack/vue-query';

export const getPessoas = () => {
  const service = async () => {
    try {
      const data = await buscarPessoas();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return useQuery({
    queryFn: service,
    queryKey: ['GET_PESSOAS'],
    staleTime: 0
  });
};