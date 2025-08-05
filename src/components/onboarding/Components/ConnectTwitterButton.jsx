import React from 'react';
import { Button } from '@mui/material';

const ConnectTwitterButton = () => {
  const handleConnect = () => {
    // This will redirect user to your backend which starts the Twitter OAuth flow
    window.location.href = `${import.meta.env.VITE_API_BASE_URL || ''}/api/twitter/connect`;
  };

  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: '#00acee',
        color: '#00acee',
        fontWeight: 600,
        fontFamily: 'Orbitron, sans-serif',
        mt: 2,
        mb: 2
      }}
      onClick={handleConnect}
    >
      Connect Twitter
    </Button>
  );
};

export default ConnectTwitterButton;
