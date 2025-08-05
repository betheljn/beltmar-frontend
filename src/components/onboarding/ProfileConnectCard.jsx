import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel, Stack } from '@mui/material';
import { useUpdateProfile } from '../../hooks/useUpdateProfile';
import { useEffect } from 'react';
import { useAnalyzeProfile } from '../../hooks/useAnalyzeProfile';

const ProfileConnectCard = ({ userId }) => {
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [enableAI, setEnableAI] = useState(false);

  const { mutate: updateProfile, isLoading } = useUpdateProfile();
  const { mutate: analyzeProfile, isLoading: isAnalyzing } = useAnalyzeProfile();

  const formData = {
    enableAIAnalysis: enableAI,
    website: website,
    twitter: twitter,
  };

  useEffect(() => {
    if (
      formData.enableAIAnalysis &&
      userId &&
      (formData.website || formData.twitter)
    ) {
      analyzeProfile({
        userId,
        website: formData.website,
        twitter: formData.twitter,
      });
    }
  }, [formData.enableAIAnalysis, formData.website, formData.twitter, userId, analyzeProfile]);

  const handleSubmit = () => {
    updateProfile(
      { website, twitter, enableAIAnalysis: enableAI },
      {
        onSuccess: () => {
          console.log('✅ Profile updated');
        },
        onError: (err) => {
          console.error('❌ Failed to update profile:', err);
        },
      }
    );
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <TextField
        label="Twitter Handle"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
      />
      <FormControlLabel
        control={<Switch checked={enableAI} onChange={(e) => setEnableAI(e.target.checked)} />}
        label="Enable AI Analysis"
      />
      <Button variant="contained" onClick={handleSubmit} disabled={isLoading || isAnalyzing}>
        {isLoading ? 'Saving...' : 'Save & Analyze'}
      </Button>
    </Stack>
  );
};

export default ProfileConnectCard;
