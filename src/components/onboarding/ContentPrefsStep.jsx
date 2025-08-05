import React from 'react';
import { Typography, Stack, Checkbox, FormControlLabel, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const contentOptions = [
  'Educational',
  'Product Promotions',
  'Inspirational Quotes',
  'Memes & Humor',
  'Customer Testimonials',
  'Behind the Scenes',
  'Announcements',
];

const ContentPreferencesStep = ({ formData, setFormData, onComplete, onBack }) => {
  const handleCheckboxChange = (option) => {
    const current = formData.contentTypes || [];
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    setFormData({ ...formData, contentTypes: updated });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Stack spacing={3}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          What type of content would you like us to focus on?
        </Typography>

        {contentOptions.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={formData.contentTypes?.includes(option) || false}
                onChange={() => handleCheckboxChange(option)}
                sx={{ color: '#00ffff', '&.Mui-checked': { color: '#00ffff' } }}
              />
            }
            label={option}
            sx={{ color: '#e0f7fa', fontFamily: 'Orbitron, sans-serif' }}
          />
        ))}

        <TextField
          label="Other preferences"
          fullWidth
          variant="filled"
          value={formData.contentCustom || ''}
          onChange={(e) => setFormData({ ...formData, contentCustom: e.target.value })}
          InputProps={{ style: { color: '#00ffff', backgroundColor: '#121212' } }}
          InputLabelProps={{ style: { color: '#80dfff' } }}
        />
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
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

export default ContentPreferencesStep;