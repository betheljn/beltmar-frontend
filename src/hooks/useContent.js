import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';

// 📦 Get all content for current user
export const useContent = () => {
  return useQuery({
    queryKey: ['content'],
    queryFn: () => fetcher('/content'),
  });
};

// 🔍 Get content by ID (optional if needed)
export const useContentById = (id) => {
  return useQuery({
    queryKey: ['content', id],
    queryFn: () => fetcher(`/content/${id}`),
    enabled: !!id,
  });
};

// ➕ Create new content (e.g., post, ad)
export const useCreateContent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      fetcher('/content', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['content']);
    },
  });
};

// ✏️ Update content
export const useUpdateContent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }) =>
      fetcher(`/content/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['content']);
      queryClient.invalidateQueries(['content', id]);
    },
  });
};

// ♻️ Regenerate content via AI
export const useRegenerateContentAI = () => {
  return useMutation({
    mutationFn: (data) =>
      fetcher('/content/preview', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  });
};

// ❌ Delete content
export const useDeleteContent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) =>
      fetcher(`/content/${id}`, {
        method: 'DELETE',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['content']);
    },
  });
};
