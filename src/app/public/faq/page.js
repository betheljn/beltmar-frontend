"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQ() {
  const faqs = [
    { question: "How does the free consultation work?", answer: "We provide a free strategy session to assess your needs." },
    { question: "How long does it take to see results?", answer: "Results vary but most clients see improvements within 3 months." },
    { question: "How does Beltmar measure success?", answer: "We track key performance metrics like conversions, engagement, and ROI." },
  ];

  return (
    <div>
      <Navbar />
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
