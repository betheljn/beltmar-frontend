// /src/hooks/useSocketHandlers.js
import { useEffect } from 'react';
import socket, { connectSocket, disconnectSocket } from '../lib/socket';
import { useDispatch } from 'react-redux';
import { addMessage, addGroupMessage } from '../slices/messageSlice';
import { addNotification } from '../slices/uiSlice';

export const useSocketHandlers = (userId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) return;

    connectSocket(userId);

    // 📩 Direct messages
    socket.on('receive-message', (msg) => {
      dispatch(addMessage(msg));
    });

    // 👥 Group messages
    socket.on('receive-group-message', (msg) => {
      dispatch(addGroupMessage(msg));
    });

    // 👁️ DM Read receipt
    socket.on('message-read-confirmation', ({ messageId, readAt }) => {
      console.log(`✅ DM ${messageId} read at ${readAt}`);
    });

    // 👁️‍🗨️ Group message read
    socket.on('group-message-read-confirmation', ({ groupId, messageId, readBy }) => {
      console.log(`👀 Group ${groupId} msg ${messageId} read by ${readBy}`);
    });

    // 🔔 Notification
    socket.on('new-notification', (notification) => {
      dispatch(addNotification(notification));
    });

    // ✍️ Typing
    socket.on('user-typing', ({ senderId }) => {
      console.log(`✍️ ${senderId} is typing...`);
    });

    socket.on('user-stop-typing', ({ senderId }) => {
      console.log(`⛔️ ${senderId} stopped typing.`);
    });

    return () => {
      socket.off(); // Remove all listeners
      disconnectSocket();
    };
  }, [userId, dispatch]);
};
