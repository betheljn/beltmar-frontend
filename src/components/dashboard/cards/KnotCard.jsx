// components/dashboard/KnotsCard.jsx
import React from 'react';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GroupsIcon from '@mui/icons-material/Groups';

const KnotsCard = ({ knots }) => {
  const safeKnots = Array.isArray(knots) ? knots : [];

  return (
    <Paper
      component={motion.div}
      elevation={5}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        height: '80vh',
        p: 5,
        borderRadius: 4,
        bgcolor: '#1a1a1a',
        color: '#e0f7fa',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'

      }}
    >
      <Box>
        <Stack direction="row" spacing={2} alignItems="center" mb={3}>
          <GroupsIcon sx={{ fontSize: 40, color: '#00ffff' }} />
          <Typography variant="h5" fontWeight="bold">
            Knots
          </Typography>
        </Stack>

        {safeKnots.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            You're not in any knots yet. Start one now!
          </Typography>
        ) : (
          <Stack spacing={2} mb={3}>
            {safeKnots.map((knot) => (
              <Box key={knot.id} sx={{ p: 2, border: '1px solid #00bcd4', borderRadius: 2 }}>
                <Typography variant="subtitle1">{knot.name}</Typography>
                <Typography variant="caption" color="text.secondary">{knot.description}</Typography>
              </Box>
            ))}
          </Stack>
        )}
      </Box>

      <Button variant="contained" sx={{ bgcolor: '#00ffff', color: '#000' }}>
        + Create New Knot
      </Button>
    </Paper>
  );
};

export default KnotsCard;
