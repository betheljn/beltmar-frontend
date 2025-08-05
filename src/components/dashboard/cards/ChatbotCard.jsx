import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Paper } from '@mui/material';

const ChatbotCard = ({ profile }) => {
  const fallbackProfile = {
    userId: 'dev123',
    name: 'Developer',
    bio: 'Default fallback user',
    jobTitle: 'Engineer',
    industry: 'Tech',
    preferredStyle: 'Clean',
    interests: ['Debugging', 'Testing'],
    twitterHandle: '@dev',
  };

  const finalProfile = profile && typeof profile === 'object' && profile.name ? profile : fallbackProfile;

  const [messages, setMessages] = useState([
    { sender: 'ai', content: `👋 Hello ${finalProfile.name}! I'm your AI assistant. Let's work on your branding.` },
  ]);
  const [quickActions, setQuickActions] = useState([]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [pendingStage, setPendingStage] = useState(null);

  const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:1000';

  const handleSend = async (customInput) => {
    const messageToSend = customInput || input;
    if (!messageToSend.trim()) return;

    const userMessage = { sender: 'user', content: messageToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsSending(true);
    setQuickActions([]);

    try {
      const res = await fetch(`${BASE_URL}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend, profile: finalProfile }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'API error');
      }

      const data = await res.json();

      const chunks = data.reply.split(/(?=###|\n---)/g).map(chunk => chunk.trim()).filter(Boolean);
      const newMessages = chunks.map(chunk => ({
        sender: 'ai',
        content: chunk.replace(/\*\*(.*?)\*\*/g, '$1').trim(),
      }));
      
      // ✅ Avoid sending duplicates by checking last AI message
      const lastAiMessage = messages.filter(msg => msg.sender === 'ai').slice(-1)[0]?.content;
      const isDuplicate = newMessages.some(msg => msg.content === lastAiMessage);
        if (!isDuplicate) {
          setMessages((prev) => [...prev, ...newMessages]);
        }
      setQuickActions(data.quickActions || []);

      if (data.reply.includes('Does this') || data.reply.includes('Would you like')) {
        setPendingStage('next');
      } else {
        setPendingStage(null);
      }
    } catch (err) {
      console.error('AI response error:', err);
      setMessages((prev) => [...prev, { sender: 'ai', content: '❌ Sorry, something went wrong. Try again!' }]);
    } finally {
      setIsSending(false);
    }
  };

  const handleQuickActionClick = (action) => {
    handleSend(action);
  };

  const handleFollowUp = () => {
    if (pendingStage) {
      handleSend('Yes, continue.');
      setPendingStage(null);
    }
  };

  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', bgcolor: '#1a1a1a', p: 3, borderRadius: 3, overflow: 'hidden' }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#00ffff' }}>Belta</Typography>

      <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2, pr: 1 }}>
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              mb: 1.5,
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              bgcolor: msg.sender === 'user' ? '#00ffff' : '#2a2a2a',
              color: msg.sender === 'user' ? '#000' : '#e0f7fa',
              px: 2,
              py: 1,
              borderRadius: 2,
              maxWidth: '75%',
              whiteSpace: 'pre-wrap',
            }}
          >
            <Typography variant="body2">
            {msg.content
              .replace(/^#+\s*/gm, '')                      // Remove markdown headers (##, ###, etc.)
              .replace(/^\*\s*/gm, '')                      // Remove leading bullets
              .replace(/\*\*(.*?)\*\*/g, '$1')              // Remove bold formatting
              .replace(/`([^`]+)`/g, '$1')                  // Remove inline code backticks
              .replace(/^-{3,}$/gm, '')                     // Remove horizontal rules (---)
              .trim()
            }
            </Typography>
          </Box>
        ))}

        {quickActions.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#e0f7fa', mb: 1 }}>🔧 Quick Actions:</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {quickActions.map((action, i) => (
                <Button
                  key={i}
                  onClick={() => handleQuickActionClick(action)}
                  variant="outlined"
                  size="small"
                  sx={{ color: '#00ffff', borderColor: '#00ffff', textTransform: 'none', mb: 1 }}
                >
                  {action}
                </Button>
              ))}
            </Stack>
          </Box>
        )}

        {pendingStage && (
          <Box sx={{ mt: 2 }}>
            <Button onClick={handleFollowUp} variant="contained" sx={{ bgcolor: '#00ffff', color: '#000' }}>
              Yes, continue
            </Button>
          </Box>
        )}
      </Box>

      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          size="small"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          sx={{ bgcolor: '#2e2e2e', input: { color: '#e0f7fa' } }}
        />
        <Button onClick={() => handleSend()} disabled={isSending} variant="contained" sx={{ bgcolor: '#00ffff', color: '#000' }}>
          Send
        </Button>
      </Stack>
    </Paper>
  );
};

export default ChatbotCard;


