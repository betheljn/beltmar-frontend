import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';
import { getUserId } from '../lib/utils';

// 🔍 Fetch all campaigns for the current user
export const useCampaigns = () => {
  return useQuery({
    queryKey: ['campaigns'],
    queryFn: () => fetcher(`/campaigns?userId=${getUserId()}`),
  });
};

// ➕ Create a new campaign
export const useCreateCampaign = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      fetcher('/campaigns', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['campaigns']);
    },
  });
};

// ✏️ Update campaign status (e.g. draft → live)
export const useUpdateCampaignStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }) =>
      fetcher(`/campaigns/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['campaigns']);
    },
  });
};

// ❌ Delete a campaign
export const useDeleteCampaign = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => fetcher(`/campaigns/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries(['campaigns']);
    },
  });
};

// ⚙️ Update campaign details
export const useUpdateCampaign = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      fetcher(`/campaigns/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['campaigns']);
    },
  });
};

// 📥 Get a single campaign (optional usage)
export const useCampaignById = (id) => {
  return useQuery({
    queryKey: ['campaigns', id],
    queryFn: () => fetcher(`/campaigns/${id}`),
    enabled: !!id,
  });
};
