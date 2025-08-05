import { useMutation } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';

export const useLogin = () =>
  useMutation({
    mutationFn: ({ username, password }) =>
      fetcher('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      }),
    onSuccess: (res) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.user.id);
    },
  });

export const useRegister = () =>
  useMutation({
    mutationFn: ({ username, email, password }) =>
      fetcher('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      }),
    onSuccess: (res) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.user.id);
    },
  });
