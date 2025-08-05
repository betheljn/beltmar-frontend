// hooks/useCreateKnot.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateKnot = ({ onSuccess }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.post('/api/knots', data);
      return res.data;
    },
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['knots']);
      onSuccess?.(...args);
    },
  });
};
