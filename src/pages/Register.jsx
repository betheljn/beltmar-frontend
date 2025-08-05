import React, { useState } from 'react';
import { useRegister } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Stack,
  Snackbar,
  Alert
} from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../assets/beltmar-icon.png';

const variants = {
  initial: { opacity: 0, y: -20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Register = () => {
  const navigate = useNavigate();
  const registerMutation = useRegister();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  const validateForm = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = 'Username is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Valid email is required.';
    if (!form.password.trim() || form.password.length < 4)
      newErrors.password = 'Password must be at least 4 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const data = await registerMutation.mutateAsync(form);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id);
      localStorage.setItem('user', JSON.stringify(data.user));
      setToast({ open: true, message: 'Registration successful! Redirecting...', severity: 'success' });
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      setToast({
        open: true,
        message: err?.response?.data?.message || 'Registration failed.',
        severity: 'error',
      });
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'radial-gradient(circle at 30% 30%, #0f0f0f, #000)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Paper
          elevation={12}
          sx={{
            p: 4,
            width: 460,
            borderRadius: 4,
            backdropFilter: 'blur(10px)',
            background: 'rgba(20, 20, 30, 0.95)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
            color: '#e0e0e0',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0 0 50px rgba(0, 255, 255, 0.5)',
              borderColor: 'rgba(0, 255, 255, 0.5)',
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <motion.div variants={variants} custom={0} initial="initial" animate="animate" style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={logo} alt="Beltmar Logo" style={{ height: 60 }} />
              </motion.div>

              <motion.div variants={variants} custom={1} initial="initial" animate="animate">
                <Typography variant="h6" align="center">Create your account</Typography>
              </motion.div>

              {['username', 'email', 'password'].map((field, i) => (
                <motion.div key={field} variants={variants} custom={i + 2} initial="initial" animate="animate">
                  <TextField
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    type={field === 'password' ? 'password' : 'text'}
                    fullWidth
                    required
                    variant="filled"
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    error={Boolean(errors[field])}
                    helperText={errors[field] || ''}
                    InputProps={{
                      style: {
                        color: '#00ffff',
                        backgroundColor: '#121212',
                        fontFamily: 'Orbitron, sans-serif',
                      },
                    }}
                    InputLabelProps={{ style: { color: '#80dfff' } }}
                  />
                </motion.div>
              ))}

              <motion.div variants={variants} custom={6} initial="initial" animate="animate">
                <motion.div whileTap={{ scale: 0.97 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: '#00ffff',
                      color: '#000',
                      fontFamily: 'Orbitron, sans-serif',
                      fontWeight: 600,
                      letterSpacing: 1,
                      '&:hover': {
                        bgcolor: '#00cccc',
                        transform: 'scale(1.02)',
                      },
                      transition: 'all 0.25s ease-in-out',
                    }}
                  >
                    Register
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div variants={variants} custom={7} initial="initial" animate="animate">
                <Typography variant="body2" align="center">
                  Already have an account?{' '}
                  <Link
                    to="/"
                    style={{
                      color: '#00ffff',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    Login here
                  </Link>
                </Typography>
              </motion.div>
            </Stack>
          </form>
        </Paper>
      </motion.div>

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;

