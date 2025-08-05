import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Chip, Paper, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/HourglassEmpty';
import InsightsIcon from '@mui/icons-material/Insights';
import axios from 'axios';

const ConnectPlatformsCard = ({ website, twitter, userId }) => {
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const res = await axios.get(`/api/profile-analysis/${userId}`);
        setInsights(res.data?.summary || null);
      } catch (err) {
        console.error('Failed to fetch analysis:', err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchInsights();
  }, [userId]);

  return (
    <Paper elevation={4} sx={{ p: 3, bgcolor: '#1a1a1a', border: '1px solid #00ffff', borderRadius: 3 }}>
      <Typography variant="h6" color="#00ffff" gutterBottom>
        🔗 Connected Platforms
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
        {website && <Chip label={`🌐 ${website}`} icon={<CheckCircleIcon color="success" />} />}
        {twitter && <Chip label={`🐦 ${twitter}`} icon={<CheckCircleIcon color="success" />} />}
      </Stack>

      <Box mt={2}>
        {loading ? (
          <Stack direction="row" spacing={1} alignItems="center">
            <CircularProgress size={20} color="info" />
            <Typography variant="body2" color="gray">Analyzing your digital presence...</Typography>
          </Stack>
        ) : insights ? (
          <>
            <Typography variant="subtitle2" sx={{ color: '#80dfff', mb: 1 }}>
              <InsightsIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> AI Insights
            </Typography>
            <Typography variant="body2" sx={{ color: '#e0f7fa' }}>{insights}</Typography>
          </>
        ) : (
          <Typography variant="body2" color="gray">
            No insights available yet.
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default ConnectPlatformsCard;
