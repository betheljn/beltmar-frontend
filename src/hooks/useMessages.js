// /src/hooks/useMessages.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';
import socket from '../lib/socket';

// 🔁 Fetch direct messages between two users
export const useDirectMessages = (recipientId) =>
  useQuery({
    queryKey: ['directMessages', recipientId],
    queryFn: () => fetcher(`/messages/${recipientId}`),
    enabled: !!recipientId,
  });

// 📩 Send direct message + emit via Socket.IO
export const useSendMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ recipientId, content }) => {
      const res = await fetcher(`/messages`, {
        method: 'POST',
        body: JSON.stringify({ recipientId, content }),
      });
      socket.emit('send-message', { recipientId, content });
      return res;
    },
    onSuccess: (_, { recipientId }) => {
      queryClient.invalidateQueries(['directMessages', recipientId]);
    },
  });
};

// 👥 Fetch group messages
export const useGroupMessages = (groupId) =>
  useQuery({
    queryKey: ['groupMessages', groupId],
    queryFn: () => fetcher(`/group-messages/${groupId}`),
    enabled: !!groupId,
  });

// 📢 Send group message + emit
export const useSendGroupMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ groupId, content }) => {
      const res = await fetcher(`/group-messages`, {
        method: 'POST',
        body: JSON.stringify({ groupId, content }),
      });
      socket.emit('send-group-message', { groupId, content });
      return res;
    },
    onSuccess: (_, { groupId }) => {
      queryClient.invalidateQueries(['groupMessages', groupId]);
    },
  });
};

// ✅ Mark direct message as read
export const useMarkMessageRead = () =>
  useMutation({
    mutationFn: (messageId) =>
      fetcher(`/messages/${messageId}/read`, { method: 'POST' }),
    onSuccess: (_, messageId) => {
      socket.emit('message-read', { messageId });
    },
  });

// ✅ Mark group message as read
export const useMarkGroupMessageRead = () =>
  useMutation({
    mutationFn: ({ groupId, messageId }) =>
      fetcher(`/group-messages/${groupId}/read`, {
        method: 'POST',
        body: JSON.stringify({ messageId }),
      }),
    onSuccess: ({ groupId, messageId }) => {
      socket.emit('group-message-read', { groupId, messageId });
    },
  });

