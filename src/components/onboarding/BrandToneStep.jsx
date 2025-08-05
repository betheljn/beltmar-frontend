import React from 'react';
import {
  Typography,
  TextField,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Box,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';

const tones = ['Professional', 'Playful', 'Bold', 'Inspirational', 'Casual', 'Luxury'];

const BrandToneStep = ({ formData, setFormData, onComplete, onBack }) => {

  const handleToneChange = (_, newTone) => {
    if (newTone !== null) {
      setFormData({ ...formData, brandTone: newTone });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Stack spacing={4}>
        <Box textAlign="center">
          <Typography variant="h6">Pick your brand’s tone</Typography>
          <Typography variant="body2" sx={{ color: '#80dfff', mt: 1 }}>
            Choose the tone that best reflects your brand’s personality. You can also type your own below.
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ color: '#80dfff', mb: 1 }}>
            Suggested tones
          </Typography>
          <ToggleButtonGroup
            value={formData.brandTone || ''}
            exclusive
            onChange={handleToneChange}
            fullWidth
            sx={{
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'center',
              '& .MuiToggleButton-root': {
                color: '#00ffff',
                borderColor: '#00ffff',
                fontFamily: 'Orbitron, sans-serif',
                '&.Mui-selected': {
                  backgroundColor: '#00ffff',
                  color: '#000',
                },
              },
            }}
          >
            {tones.map((tone) => (
              <ToggleButton key={tone} value={tone}>
                {tone}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Divider sx={{ borderColor: '#00ffff33' }} />

        <Box>
          <Typography variant="subtitle2" sx={{ color: '#80dfff', mb: 1 }}>
            Or define a custom tone
          </Typography>
          <TextField
            placeholder="e.g. witty, high-energy, minimalist"
            fullWidth
            variant="filled"
            value={formData.customTone || ''}
            onChange={(e) => setFormData({ ...formData, customTone: e.target.value })}
            InputProps={{ style: { color: '#00ffff', backgroundColor: '#121212' } }}
            InputLabelProps={{ style: { color: '#80dfff' } }}
          />
        </Box>

        <Stack direction="row" justifyContent="space-between">
          <Button onClick={onBack} sx={{ color: '#80dfff' }}>
            Back
          </Button>
          <Button onClick={onComplete} variant="contained" sx={{ bgcolor: '#00ffff', color: '#000' }}>
            Next
          </Button>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default BrandToneStep;

