import React from 'react';
import {
  Typography,
  TextField,
  Stack,
  Button,
  Autocomplete,
  Chip,
  Box
} from '@mui/material';
import { motion } from 'framer-motion';

const ageGroups = ['Teens (13-19)', 'Young Adults (20-35)', 'Adults (36-55)', 'Seniors (55+)'];
const interests = ['Fitness', 'Tech', 'Fashion', 'Finance', 'Education', 'Entertainment', 'Lifestyle'];
const locations = ['Local', 'National', 'Global'];

const TargetAudienceStep = ({ formData, setFormData, onComplete, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Stack spacing={3}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Help us understand your ideal audience
        </Typography>

        <Autocomplete
          multiple
          options={ageGroups}
          value={formData.ageGroups || []}
          onChange={(e, newValue) => setFormData({ ...formData, ageGroups: newValue })}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip key={option} label={option} {...getTagProps({ index })} sx={{ bgcolor: '#00ffff33', color: '#00ffff' }} />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Age Groups"
              variant="filled"
              InputProps={{ ...params.InputProps, style: { color: '#00ffff', backgroundColor: '#121212' } }}
              InputLabelProps={{ style: { color: '#80dfff' } }}
            />
          )}
        />

        <Autocomplete
          multiple
          options={interests}
          value={formData.interests || []}
          onChange={(e, newValue) => setFormData({ ...formData, interests: newValue })}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip key={option} label={option} {...getTagProps({ index })} sx={{ bgcolor: '#00ffff33', color: '#00ffff' }} />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Interests / Topics"
              variant="filled"
              InputProps={{ ...params.InputProps, style: { color: '#00ffff', backgroundColor: '#121212' } }}
              InputLabelProps={{ style: { color: '#80dfff' } }}
            />
          )}
        />

        <Autocomplete
          options={locations}
          value={formData.audienceLocation || ''}
          onChange={(e, newValue) => setFormData({ ...formData, audienceLocation: newValue })}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Audience Location"
              variant="filled"
              InputProps={{ ...params.InputProps, style: { color: '#00ffff', backgroundColor: '#121212' } }}
              InputLabelProps={{ style: { color: '#80dfff' } }}
            />
          )}
        />

        <TextField
          label="Describe your audience in your own words"
          fullWidth
          multiline
          rows={3}
          variant="filled"
          value={formData.targetAudience || ''}
          onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
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

export default TargetAudienceStep;
