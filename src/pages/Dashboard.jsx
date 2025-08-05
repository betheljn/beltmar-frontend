import React, { useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import WelcomeModal from '../components/WelcomeModal';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Carousel from '../components/dashboard/Carousel';

const Dashboard = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [showWelcome, setShowWelcome] = useState(user?.firstLogin);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:1000';

  const { data: profile, isLoading, error } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      const res = await axios.get(`/api/profile/${user.id}`);
      return res.data;
    },
    enabled: !!user?.id,
  });

  const { data: knots = [], isLoading: loadingKnots } = useQuery({
    queryKey: ['knots', user?.id],
    queryFn: async () => {
      const res = await axios.get('/api/knots');
      return res.data;
    },
    enabled: !!user?.id,
  });

  const handleCloseWelcome = async () => {
    setShowWelcome(false);
    try {
      await fetch(`${BASE_URL}/api/users/${user.id}/first-login`, { 
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        });
      const updatedUser = { ...user, firstLogin: false };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (err) {
      console.error('Failed to update firstLogin', err);
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6">Loading your dashboard...</Typography>
        <CircularProgress color="info" sx={{ mt: 2 }} />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error loading profile data.</Typography>;
  }

  return (
    <>
      <WelcomeModal
        open={showWelcome}
        onClose={handleCloseWelcome}
        username={user?.username}
        userId={user?.id}
      />

      <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Typography
          variant="h4"
          sx={{ mt: 4, mb: 2, px: 4, fontWeight: 600, color: '#00ffff', fontFamily: 'Orbitron, sans-serif' }}
        >
          🚀 Welcome, {profile?.name || user?.username}
        </Typography>

        {profile?.aiInteractionLog && (
          <Box sx={{ mb: 2, mx: 4, p: 2, bgcolor: '#1e1e1e', borderRadius: 2 }}>
            <Typography variant="subtitle1" sx={{ color: '#80dfff' }}>
              🧠 Your AI Summary
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', mt: 1 }}>
              {profile.aiInteractionLog}
            </Typography>
          </Box>
        )}

        <Carousel profile={profile} knots={knots} loadingKnots={loadingKnots} />
      </Box>
    </>
  );
};

export default Dashboard;


