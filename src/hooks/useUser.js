import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';

// 👤 Load current user (includes profile + roles)
export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => fetcher('/auth/me'), // Adjust if your endpoint is different
  });
};

// 🔄 Update profile (bio, avatar, job, etc.)
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      fetcher('/user-settings/profile', {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
    },
  });
};

// ⚙️ Get user settings (preferences, tone, Belta style, etc.)
export const useUserSettings = () => {
  return useQuery({
    queryKey: ['userSettings'],
    queryFn: () => fetcher('/user-settings'),
  });
};

// ✏️ Update user settings (tone, notification prefs, etc.)
export const useUpdateUserSetting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ key, value }) =>
      fetcher('/user-settings', {
        method: 'POST',
        body: JSON.stringify({ key, value }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['userSettings']);
    },
  });
};
