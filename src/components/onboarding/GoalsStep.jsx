import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  Autocomplete,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';

const businessTypes = [
  'E-commerce store',
  'Personal brand',
  'Coaching / Consulting',
  'SaaS company',
  'Local service business',
  'Content creator / Influencer',
  'Non-profit / Community'
];

const platforms = ['Instagram', 'TikTok', 'Twitter/X', 'YouTube', 'LinkedIn', 'Website/SEO', 'Email Marketing'];
const challenges = ['Content ideas', 'Low engagement', 'Multi-platform stress', 'Conversions', 'Analytics overwhelm', 'Brand consistency'];

const GoalsStep = ({ formData, setFormData, onComplete }) => {
  const [section, setSection] = useState(0);
  const totalSections = 4;

  const next = () => {
    if (section < totalSections - 1) {
      setSection(section + 1);
    } else {
      onComplete?.();
    }
  };

  const prev = () => setSection((s) => Math.max(s - 1, 0));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Stack spacing={3}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Step {section + 1} of {totalSections}: Personalize Your AI Strategy
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', color: '#80dfff' }}>
          Let us know more about your business so the AI can tailor insights and content to your goals.
        </Typography>

        {section === 0 && (
          <Autocomplete
            options={businessTypes}
            value={formData.businessType || ''}
            onChange={(e, newValue) => setFormData({ ...formData, businessType: newValue })}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Your Business Type"
                variant="filled"
                placeholder="e.g., Coaching / Consulting"
                InputProps={{ ...params.InputProps, style: { color: '#00ffff', backgroundColor: '#121212' } }}
                InputLabelProps={{ style: { color: '#80dfff' } }}
              />
            )}
          />
        )}

        {section === 1 && (
          <FormGroup>
            <FormLabel sx={{ color: '#80dfff' }}>Your Biggest Marketing Challenges</FormLabel>
            {challenges.map((item) => (
              <FormControlLabel
                key={item}
                control={
                  <Checkbox
                    checked={formData.challenges?.includes(item) || false}
                    onChange={(e) => {
                      const newList = formData.challenges || [];
                      setFormData({
                        ...formData,
                        challenges: e.target.checked
                          ? [...newList, item]
                          : newList.filter((c) => c !== item)
                      });
                    }}
                  />
                }
                label={item}
                sx={{ color: '#e0f7fa' }}
              />
            ))}
          </FormGroup>
        )}

        {section === 2 && (
          <FormGroup>
            <FormLabel sx={{ color: '#80dfff' }}>Key Platforms You Use</FormLabel>
            {platforms.map((item) => (
              <FormControlLabel
                key={item}
                control={
                  <Checkbox
                    checked={formData.platforms?.includes(item) || false}
                    onChange={(e) => {
                      const list = formData.platforms || [];
                      setFormData({
                        ...formData,
                        platforms: e.target.checked
                          ? [...list, item]
                          : list.filter((p) => p !== item)
                      });
                    }}
                  />
                }
                label={item}
                sx={{ color: '#e0f7fa' }}
              />
            ))}
          </FormGroup>
        )}

        {section === 3 && (
          <FormControl component="fieldset">
            <FormLabel sx={{ color: '#80dfff' }}>Preferred AI Involvement</FormLabel>
            <RadioGroup
              value={formData.involvement || ''}
              onChange={(e) => setFormData({ ...formData, involvement: e.target.value })}
            >
              <FormControlLabel value="Full automation" control={<Radio />} label="Full automation" />
              <FormControlLabel value="Co-create with AI" control={<Radio />} label="Co-create with AI" />
              <FormControlLabel value="Just suggestions" control={<Radio />} label="Just suggestions" />
            </RadioGroup>
          </FormControl>
        )}

        <Stack direction="row" spacing={2} justifyContent="space-between">
          {section > 0 && (
            <Button onClick={prev} sx={{ color: '#80dfff' }}>
              Back
            </Button>
          )}
          <Button
            onClick={next}
            variant="contained"
            sx={{ bgcolor: '#00ffff', color: '#000', fontWeight: 600, fontFamily: 'Orbitron, sans-serif' }}
          >
            {section < totalSections - 1 ? 'Next' : 'Continue'}
          </Button>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default GoalsStep;


