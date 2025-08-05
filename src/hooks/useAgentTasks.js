import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';

// 🔍 Get a list of agent tasks for the user
export const useAgentTasks = () => {
  return useQuery({
    queryKey: ['agent-tasks'],
    queryFn: () => fetcher('/agents/tasks'),
  });
};

// ➕ Create a new agent task (e.g., 'generate', 'strategy', etc.)
export const useCreateAgentTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      fetcher('/agents/tasks', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['agent-tasks']);
    },
  });
};

// 🔄 Refetch latest logs/statistics
export const useAgentLogs = ({ page = 1, limit = 10, agentType = '' }) => {
  return useQuery({
    queryKey: ['agent-logs', page, agentType],
    queryFn: () =>
      fetcher(
        `/agents/logs?page=${page}&limit=${limit}&agentType=${encodeURIComponent(agentType)}`
      ),
  });
};

// 📊 Optional: fetch summary/stats for dashboard
export const useAgentStats = () => {
  return useQuery({
    queryKey: ['agent-stats'],
    queryFn: () => fetcher('/agents/stats'),
  });
};
