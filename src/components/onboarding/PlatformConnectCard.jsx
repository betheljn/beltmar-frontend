import React from 'react';
import { Stack, Typography, TextField, Switch, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const PlatformConnectCard = ({
  title,
  description,
  placeholder,
  value,
  onChange,
  showToggle = false,
  toggleValue,
  onToggle,
  connectButton,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        sx={{
          border: '1px solid #00ffff44',
          borderRadius: 2,
          p: 3,
          bgcolor: '#1a1a1a',
          mb: 2,
        }}
      >
        <Typography variant="subtitle1" sx={{ color: '#00ffff', fontFamily: 'Orbitron, sans-serif' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#80dfff', mb: 2 }}>
          {description}
        </Typography>

        {onChange && (
          <TextField
            placeholder={placeholder}
            fullWidth
            variant="filled"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            InputProps={{ style: { color: '#00ffff', backgroundColor: '#121212' } }}
            InputLabelProps={{ style: { color: '#80dfff' } }}
          />
        )}

        {connectButton && (
          <Button
            variant="outlined"
            onClick={connectButton}
            sx={{
              mt: 2,
              borderColor: '#00ffff',
              color: '#00ffff',
              fontFamily: 'Orbitron, sans-serif',
              '&:hover': {
                bgcolor: '#00ffff22',
              },
            }}
          >
            Connect
          </Button>
        )}

        {showToggle && (
          <Stack direction="row" alignItems="center" mt={2}>
            <Switch checked={toggleValue} onChange={(e) => onToggle(e.target.checked)} />
            <Typography sx={{ color: '#e0f7fa' }}>Enable AI analysis</Typography>
          </Stack>
        )}
      </Box>
    </motion.div>
  );
};

export default PlatformConnectCard;
