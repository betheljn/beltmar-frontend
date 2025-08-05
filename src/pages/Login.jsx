import React, { useState } from 'react';
import { useLogin } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Stack,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { motion } from 'framer-motion';
import logo from '../assets/beltmar-icon.png';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const navigate = useNavigate();
  const loginMutation = useLogin();
  const [form, setForm] = useState({ username: '', password: '' });
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });

  const showToast = (message, severity = 'info') => {
    setToast({ open: true, message, severity });
  };

  const closeToast = () => {
    setToast({ ...toast, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginMutation.mutateAsync(form);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id);
        localStorage.setItem('user', JSON.stringify(data.user));
      showToast('Login successful', 'success');
      setTimeout(() => navigate('/dashboard'), 800);
    } catch (err) {
      showToast(err?.response?.data?.message || 'Login failed', 'error');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'radial-gradient(circle at 30% 30%, #0f0f0f, #000000)',
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
              <Box display="flex" justifyContent="center">
                <img src={logo} alt="Beltmar Logo" style={{ height: 60 }} />
              </Box>

              <Typography
                variant="h6"
                align="center"
                sx={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: 1 }}
              >
                Welcome back
              </Typography>

              <TextField
                label="Username"
                fullWidth
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
                variant="filled"
                InputProps={{
                  style: {
                    color: '#00ffff',
                    backgroundColor: '#121212',
                    fontFamily: 'Orbitron, sans-serif',
                  },
                }}
                InputLabelProps={{ style: { color: '#80dfff' } }}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                variant="filled"
                InputProps={{
                  style: {
                    color: '#00ffff',
                    backgroundColor: '#121212',
                    fontFamily: 'Orbitron, sans-serif',
                  },
                }}
                InputLabelProps={{ style: { color: '#80dfff' } }}
              />

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
                Login
              </Button>

              <Typography variant="body2" align="center">
                Don’t have an account?{' '}
                <Link
                  to="/register"
                  style={{
                    color: '#00ffff',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  Register here
                </Link>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </motion.div>

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={closeToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={closeToast} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;





