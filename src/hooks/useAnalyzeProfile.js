import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useAnalyzeProfile = () => {
  return useMutation({
    mutationFn: (data) => axios.post('/api/ai/analyze-profile', data).then(res => res.data),
  });
};
