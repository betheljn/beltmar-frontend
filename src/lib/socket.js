// /src/lib/socket.js

import { io } from 'socket.io-client';

const socket = io('http://localhost:1000', {
  autoConnect: false,
});

// Optional: Attach userId before connecting
export const connectSocket = (userId) => {
  socket.auth = { userId };
  socket.connect();
};

export const disconnectSocket = () => {
  if (socket.connected) socket.disconnect();
};

export default socket;
