import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../assets/beltmar-icon.png';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import GoalsStep from './onboarding/GoalsStep';
import BrandToneStep from './onboarding/BrandToneStep';
import ContentPreferencesStep from './onboarding/ContentPrefsStep';
import TargetAudienceStep from './onboarding/TargetAudienceStep';
import CompetitorInsightStep from './onboarding/CompetitorInsightStep';
import ConnectPlatformsStep from './onboarding/ConnectPlatformStep';

const WelcomeModal = ({ open, onClose, username, userId }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    goals: '',
    brandTone: '',
    contentPreferences: '',
    targetAudience: '',
    competitors: '',
    websiteConnected: false,
    twitterConnected: false,
    instagramConnected: false,
    youtubeConnected: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const handleFinish = async () => {
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('token'); // Or however you store it
  
      // 1. Update user.firstLogin = false
      await axios.patch(
        `${BASE_URL}/api/users/${userId}/first-login`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // 2. Run initial AI profile analysis
      await axios.post(
        `${BASE_URL}/api/profile/${userId}/ai-analysis`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // 3. Close modal and show dashboard
      onClose();
    } catch (err) {
      console.error('🔴 Onboarding finish error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const renderStep = () => {
    switch (step) {
        case 0:
            return (
              <>
                <Typography variant="h4" gutterBottom>
                  Welcome, {username}!
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: '#80dfff' }}>
                  We're building your custom AI strategy — just a few quick questions (6 steps).
                </Typography>
                <Typography variant="body2" sx={{ mb: 4, color: '#b0ebff' }}>
                  This will only take about a minute.
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button onClick={onClose} sx={{ color: '#80dfff' }}>Skip</Button>
                  <Button onClick={nextStep} variant="contained" sx={btnStyle}>Start</Button>
                </Stack>
              </>
            );
      case 1:
        return (
          <GoalsStep
            formData={formData}
            setFormData={setFormData}
            onComplete={() => {
                console.log('🎯 Final onboarding data:', formData);
                nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 2:
        return (
          <BrandToneStep
            formData={formData}
            setFormData={setFormData}
            onComplete={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <ContentPreferencesStep
            formData={formData}
            setFormData={setFormData}
            onComplete={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <TargetAudienceStep
            formData={formData}
            setFormData={setFormData}
            onComplete={nextStep}
            onBack={prevStep}
          />
        );
      case 5:
        return (
          <ConnectPlatformsStep
            formData={formData}
            setFormData={setFormData}
            onComplete={nextStep}
            onBack={prevStep}
          />
        );
        case 6:
        return (
          <CompetitorInsightStep
            formData={formData}
            setFormData={setFormData}
            onComplete={nextStep}
            onBack={prevStep}
          />
        );
        case 7:
          if (isSubmitting) {
            return (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="300px"
              >
                <CircularProgress sx={{ color: '#00ffff', mb: 3 }} />
                <Typography variant="body1" sx={{ color: '#80dfff' }}>
                  Creating your AI strategy...
                </Typography>
              </Box>
            );
          }
        
          return (
            <>
              <Typography variant="h5" gutterBottom>
                All set!
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Your preferences are saved. Ready to launch the dashboard?
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <Button onClick={prevStep} sx={btnStyle}>Back</Button>
                <Button
                  onClick={handleFinish}
                  variant="contained"
                  sx={btnStyle}
                >
                  Launch Dashboard
                </Button>
              </Stack>
            </>
          );
      default:
        return null;
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.95)',
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            maxWidth: 600,
            width: '90%',
            textAlign: 'center',
            bgcolor: '#1a1a1a',
            border: '1px solid #00ffff',
            borderRadius: 4,
            boxShadow: 24,
            p: 5,
            color: '#e0f7fa',
            fontFamily: 'Orbitron, sans-serif',
            backdropFilter: 'blur(10px)',
          }}
        >
          <img src={logo} alt="Beltmar Logo" style={{ height: 60, marginBottom: 24 }} />
          {renderStep()}
        </Box>
      </Box>
    </Modal>
  );
};

const btnStyle = {
  bgcolor: '#00ffff',
  color: '#000',
  fontWeight: 600,
  fontFamily: 'Orbitron, sans-serif',
  '&:hover': {
    bgcolor: '#00cccc',
  },
};

export default WelcomeModal;