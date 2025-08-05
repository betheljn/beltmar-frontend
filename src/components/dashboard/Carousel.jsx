// components/dashboard/Carousel.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChatbotCard from './Cards/ChatBotCard';
import KnotsCard from './Cards/KnotCard';


const cardStyle = {
    flex: '0 0 100vw',
    height: '100%',
    bgcolor: '#1e1e1e',
    color: '#e0f7fa',
    p: 5,
    boxShadow: 6,
    scrollSnapAlign: 'center',
    overflowY: 'auto',
  };
  
  

const placeholderCards = [
  { title: '🧠 AI Analysis Summary', key: 'analysis' },
  { title: '🎯 Strategy Suggestions', key: 'strategy' },
  { title: '📈 Performance', key: 'performance' },
  { title: '📅 Planner', key: 'planner' },
  { title: '🤝 Agents & Tasks', key: 'agents' },
];

const Carousel = ({ profile, knots = [], loadingKnots }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '80vh',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        px: 0,
        gap: 0,
        width: '100%',
      }}
    >
      {/* 🤖 Chatbot */}
      <Box sx={cardStyle}>
        <ChatbotCard profile={profile} />
      </Box>

      {/* 🧵 Knots */}
      <Box sx={cardStyle}>
        <KnotsCard knots={knots} loading={loadingKnots} />
      </Box>

      {/* Placeholder Cards */}
      {placeholderCards.map(({ title, key }) => (
        <Box key={key} sx={cardStyle}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1">Placeholder for {title} content.</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;


