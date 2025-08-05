import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: async ({ website, twitter, enableAIAnalysis }) => {
      const response = await axios.put('/api/profile/update', {
        website,
        twitter,
        enableAIAnalysis,
      });
      return response.data;
    },
  });
};

