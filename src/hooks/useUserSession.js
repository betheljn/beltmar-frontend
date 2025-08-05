export const useUserSession = () => {
    const token = localStorage.getItem('token');
    return {
      isAuthenticated: !!token,
      userId: localStorage.getItem('userId'),
    };
  };

  