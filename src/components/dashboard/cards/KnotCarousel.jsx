import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useKnots } from '../../hooks/useKnots';
import KnotCard from './cards/KnotCard';
import CreateKnotCard from './CreateKnotCard';
import ChatbotCard from './cards/ChatbotCard';
import CreateKnotModal from './CreateKnotModal';

const KnotCarousel = ({ onSelectKnot }) => {
  const { data: knots = [] } = useKnots();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Box sx={{ display: 'flex', overflowX: 'auto', p: 2 }}>
        <ChatbotCard />
        {knots.map((knot) => (
          <KnotCard key={knot.id} knot={knot} onClick={onSelectKnot} />
        ))}
        <CreateKnotCard onCreate={() => setShowModal(true)} />
      </Box>

      <CreateKnotModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default KnotCarousel;

