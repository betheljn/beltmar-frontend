import React, { useState } from 'react';
import {
  Modal, Box, Typography, TextField, Button, Stack, CircularProgress
} from '@mui/material';
import { useCreateKnot } from '../../hooks/useCreateKnot';

const CreateKnotModal = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { mutate, isPending } = useCreateKnot({
    onSuccess: () => {
      setName('');
      setDescription('');
      onClose(); // close modal on success
    },
  });

  const handleSubmit = () => {
    mutate({ name, description });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 500,
          maxWidth: '90%',
          p: 4,
          bgcolor: '#1a1a1a',
          color: '#e0f7fa',
          mx: 'auto',
          mt: '10vh',
          borderRadius: 3,
          boxShadow: 24,
          border: '1px solid #00ffff',
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Create New Knot
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            InputProps={{ style: { color: '#00ffff' } }}
            InputLabelProps={{ style: { color: '#80dfff' } }}
          />

          <TextField
            label="Description"
            variant="filled"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={3}
            InputProps={{ style: { color: '#00ffff' } }}
            InputLabelProps={{ style: { color: '#80dfff' } }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ bgcolor: '#00ffff', color: '#000' }}
            disabled={isPending}
          >
            {isPending ? <CircularProgress size={24} sx={{ color: '#000' }} /> : 'Create Knot'}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CreateKnotModal;
