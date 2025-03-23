"use client";

import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Fade,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordionClasses } from "@mui/material/Accordion";
import { accordionDetailsClasses } from "@mui/material/AccordionDetails";

const faqItems = [
  {
    question: "What makes Beltmar’s AI different from other marketing tools?",
    answer:
      "Our AI is trained specifically on marketing strategy data—allowing real-time optimizations, adaptive content, and personalized growth plans built around your brand.",
  },
  {
    question: "Can your AI integrate with my existing platforms?",
    answer:
      "Absolutely. We integrate seamlessly with popular CRMs, analytics tools, social media platforms, and ad networks for maximum performance.",
  },
  {
    question: "Do I need to be tech-savvy to use Beltmar?",
    answer:
      "Not at all. Our platform is built for usability—whether you're a founder, a marketer, or a creative. We offer onboarding and support every step of the way.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Most clients start seeing noticeable growth in traffic and engagement within the first few weeks. Our real-time analytics dashboard keeps you in the loop at all times.",
  },
];

export default function FaqAccordion() {
  const [expandedIndex, setExpandedIndex] = React.useState(null);
  const theme = useTheme();

  const handleExpansion = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {faqItems.map((item, index) => (
        <Accordion
          key={index}
          expanded={expandedIndex === index}
          onChange={() => handleExpansion(index)}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={[
            expandedIndex === index
              ? {
                  [`& .${accordionClasses.region}`]: { height: "auto" },
                  [`& .${accordionDetailsClasses.root}`]: { display: "block" },
                }
              : {
                  [`& .${accordionClasses.region}`]: { height: 0 },
                  [`& .${accordionDetailsClasses.root}`]: { display: "none" },
                },
            {
              background: theme.palette.background.paper,
              borderRadius: 2,
              boxShadow: theme.shadows[1],
              mb: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: theme.shadows[4],
              },
            },
          ]}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography fontWeight={600}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
