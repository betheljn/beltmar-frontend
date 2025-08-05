import React from 'react';
import { Typography, TextField, Stack, Box, Chip, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const exampleBrands = ['Nike', 'HubSpot', 'Duolingo', 'Glossier', 'Tesla', 'Airbnb', 'Slack', 'Mailchimp', 'Patagonia', 'Coca-Cola', "Unilever"];

const CompetitorInsightStep = ({ formData, setFormData, onComplete, onBack }) => {
  const handleChipClick = (brand) => {
    const existing = formData.competitors || '';
    const brandList = existing.split(',').map((b) => b.trim()).filter(Boolean);
    if (!brandList.includes(brand)) {
      const updatedList = [...brandList, brand].join(', ');
      setFormData({ ...formData, competitors: updatedList });
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
          <Typography variant="h6">Who inspires your brand?</Typography>
          <Typography variant="body2" sx={{ color: '#80dfff', mt: 1 }}>
            List your competitors or brands you admire for their content, tone, or strategy.
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ color: '#80dfff', mb: 1, textAlign: 'center' }}>
            Popular examples
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {exampleBrands.map((brand) => (
              <Chip
                key={brand}
                label={brand}
                onClick={() => handleChipClick(brand)}
                sx={{
                  bgcolor: '#00ffff33',
                  color: '#00ffff',
                  fontFamily: 'Orbitron, sans-serif',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: '#00cccc55' },
                }}
              />
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#00ffff33' }} />

        <TextField
          label="Your competitor list"
          fullWidth
          multiline
          rows={3}
          placeholder="e.g. Nike, HubSpot, Duolingo"
          variant="filled"
          value={formData.competitors || ''}
          onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
          InputProps={{
            style: {
              color: '#00ffff',
              backgroundColor: '#121212',
              fontFamily: 'Orbitron, sans-serif',
            },
          }}
          InputLabelProps={{ style: { color: '#80dfff' } }}
        />

        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
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

export default CompetitorInsightStep;
