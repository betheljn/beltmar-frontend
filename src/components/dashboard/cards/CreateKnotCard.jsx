import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CreateKnotCard = ({ onCreate }) => (
  <Card
    sx={{ width: 300, height: 200, bgcolor: '#121212', color: '#00ffff', border: '2px dashed #00ffff', borderRadius: 4, m: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
    onClick={onCreate}
  >
    <CardContent>
      <Box display="flex" flexDirection="column" alignItems="center">
        <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
        <Typography variant="body2" sx={{ mt: 1 }}>Create New Knot</Typography>
      </Box>
    </CardContent>
  </Card>
);

export default CreateKnotCard;
