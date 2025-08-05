export const fetcher = async (url, options = {}) => {
  const token = localStorage.getItem('token');

  const res = await fetch(`http://localhost:1000/api${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Request failed');
  }

  return res.json();
};

