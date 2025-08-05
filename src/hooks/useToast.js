// src/hooks/useToast.js
import { useState, useCallback } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });

  const showToast = useCallback((message, severity = 'info') => {
    setToast({ open: true, message, severity });
  }, []);

  const closeToast = () => {
    setToast({ ...toast, open: false });
  };

  return { toast, showToast, closeToast };
};
