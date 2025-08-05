// components/onboarding/ConnectPlatformsStep.jsx
import React from 'react';
import { Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ConnectPlatformsCard from '../onboarding/PlatformConnectCard';
import ConnectTwitterButton from './Components/ConnectTwitterButton';

import { useState } from 'react';

const ConnectPlatformsStep = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    website: '',
    twitter: '',
    enableAIAnalysis: false,
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Stack spacing={3} sx={{ mb: 4 }}>
        <h2 style={{ textAlign: 'center', color: '#00ffff', fontFamily: 'Orbitron, sans-serif' }}>
          Connect Your Platforms
        </h2>
        <p style={{ textAlign: 'center', color: '#e0f7fa', fontFamily: 'Orbitron, sans-serif' }}>
          To get the most out of Beltmar, please connect your website and Twitter account. This will help us analyze your digital presence and provide personalized insights.
        </p>
      </Stack>
    <ConnectPlatformsCard
      website={formData.website}
      twitter={formData.twitter}
      enableAI={formData.enableAIAnalysis}
      onChange={(updated) => setFormData({ ...formData, ...updated })}
    />
    <ConnectTwitterButton
      onConnect={(twitterHandle) => setFormData({ ...formData, twitter: twitterHandle })}
      twitterHandle={formData.twitter}
      sx={{ mt: 2, mb: 4 }} 
    />
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
        <Button onClick={onBack} sx={{ color: '#80dfff' }}>
          Back
        </Button>
        <Button onClick={onComplete} variant="contained" sx={{ bgcolor: '#00ffff', color: '#000' }}>
          Finish
        </Button>
      </Stack>
    </motion.div>
  );
};

export default ConnectPlatformsStep;


