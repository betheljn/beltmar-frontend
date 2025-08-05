import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';

// 📥 Get all knots for current user
export const useKnots = () => {
  return useQuery({
    queryKey: ['knots'],
    queryFn: () => fetcher('/knots'),
  });
};

// 📘 Get a specific knot by ID
export const useKnotById = (knotId) => {
  return useQuery({
    queryKey: ['knot', knotId],
    queryFn: () => fetcher(`/knots/${knotId}`),
    enabled: !!knotId,
  });
};

// ➕ Create a new knot
export const useCreateKnot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      fetcher('/knots', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['knots']);
    },
  });
};

// ✏️ Update a knot
export const useUpdateKnot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...data }) =>
      fetcher(`/knots/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['knots']);
    },
  });
};

// ❌ Delete a knot
export const useDeleteKnot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) =>
      fetcher(`/knots/${id}`, {
        method: 'DELETE',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['knots']);
    },
  });
};

// 📥 Get members of a specific knot
export const useKnotMembers = (knotId) => {
    return useQuery({
      queryKey: ['knot-members', knotId],
      queryFn: () => fetcher(`/knots/${knotId}/members`),
      enabled: !!knotId,
    });
  };
  
  // ➕ Add a member to a knot
  export const useKnotActivity = (knotId) => {
    return useQuery({
      queryKey: ['knot-activity', knotId],
      queryFn: () => fetcher(`/knots/${knotId}/activity`),
      enabled: !!knotId,
    });
  };


  export const useKnotAISettings = (knotId) => {
    return useQuery({
      queryKey: ['knot-ai', knotId],
      queryFn: () => fetcher(`/knot-ai/${knotId}`),
      enabled: !!knotId,
    });
  };
  
// ➕ Update AI settings for a knot
  export const useUpdateKnotAISettings = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({ knotId, data }) =>
        fetcher(`/knot-ai/${knotId}`, {
          method: 'PUT',
          body: JSON.stringify(data),
        }),
      onSuccess: (_, { knotId }) => {
        queryClient.invalidateQueries(['knot-ai', knotId]);
      },
    });
  };
  
  