"use client";

import { MdCheckCircle } from "react-icons/md";
import React, { useState } from "react";

const Pricing = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and mobile payments.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial for our Standard Plan. You can explore our services without any commitment, and you can cancel anytime during the trial period without being charged.",
    },
    {
      question: "Can I change my subscription plan at any time?",
      answer:
        "Absolutely. You can upgrade or downgrade your plan at any time through your account dashboard.",
    },
    {
      question: "What happens if I miss my monthly consultation?",
      answer:
        "Missed consultations do not roll over. We recommend scheduling in advance to avoid missing them.",
    },
  ];

  const renderFeatures = (items: string[], color: string = "#417BEB") =>
    items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <MdCheckCircle className="w-5 h-5 mt-1" color={color} />
        <span>{item}</span>
      </li>
    ));

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#e6efff] pt-24 pb-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title with Positioned Img */}
          <div className="relative inline-block mb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              Simple{" "}
              <span className="relative inline-block" style={{ color: "#417BEB" }}>
                Pricing Plan
                <img
                  src="/big-highlight.svg"
                  alt="Highlight Icon"
                  style={{
                    width: "96px",
                    height: "57.47px",
                    transform: "rotate(60deg)",
                    filter:
                      "invert(49%) sepia(65%) saturate(745%) hue-rotate(193deg) brightness(94%) contrast(90%)",
                  }}
                  className="absolute -top-9 left-[15rem] hidden md:block"
                />
              </span>
              <div className="block mt-0">For You!</div>
            </h1>
          </div>

          <p className="text-gray-600 max-w-xl mx-auto text-base mb-10">
            We offer flexible pricing options to ensure everyone has access to
            quality healthcare. Select a plan that fits your needs and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between h-[620px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div>
                <div className="flex items-center gap-2 text-base text-gray-500 mb-1">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />
                  Personal
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Basic</h3>
                <p className="text-sm text-gray-500 mt-2 mb-4">
                  Get essential healthcare services with the Basic Plan. Perfect for individuals looking for affordable care.
                </p>
                <p className="text-3xl font-bold text-gray-900 text-left mb-2">
                  Free<span className="text-sm font-normal"> /month</span>
                </p>
                <hr className="border-t border-gray-200 mb-4" />
                <ul className="space-y-3 text-left text-gray-600 text-base">
                  {renderFeatures([
                    "1 user account",
                    "Access to certified health professionals",
                    "1 consultation per month (chat or call)",
                    "Access to medical records",
                    "Basic appointment scheduling",
                    "General health tips and wellness resources",
                    "Customer support through chatbox",
                  ])}
                </ul>
              </div>
              <button className="mt-6 bg-blue-100 text-blue-700 py-2 px-4 rounded-xl font-medium hover:bg-blue-200">
                Upgrade to Basic plan →
              </button>
            </div>

            {/* Family Plan */}
            <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-6 relative flex flex-col justify-between h-[700px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="absolute top-4 right-4 bg-white text-blue-600 text-xs px-3 py-1 rounded-full font-semibold shadow">
                Popular
              </div>
              <div>
                <div className="flex items-center gap-2 text-base text-white/70 mb-1">
                  <span className="inline-block w-2 h-2 bg-white rounded-full" />
                  Family
                </div>
                <h3 className="text-2xl font-semibold">Pro</h3>
                <p className="text-sm text-white/80 mt-2 mb-4">
                  Ensure the well-being of your entire family with the Family Plan. Manage multiple users and enjoy more consultations.
                </p>
                <p className="text-3xl font-bold text-left mb-2">
                  ₦2,000 <span className="text-sm font-normal">/month</span>
                </p>
                <hr className="border-t border-white/40 mb-4" />
                <ul className="space-y-3 text-left text-base">
                  {renderFeatures(
                    [
                      "2 user account",
                      "Access to certified health professionals",
                      "1 free consultation per month (chat or call)",
                      "Access to medical records",
                      "4 appointment scheduling",
                      "Priority support",
                      "Chronic disease management resources",
                    ],
                    "#ffffff"
                  )}
                </ul>
              </div>
              <button className="mt-6 bg-white text-blue-600 py-2 px-4 rounded-xl font-medium hover:bg-blue-100">
                Upgrade to Family plan →
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between h-[620px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div>
                <div className="flex items-center gap-2 text-base text-gray-500 mb-1">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />
                  All-inclusive
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Premium</h3>
                <p className="text-sm text-gray-500 mt-2 mb-4">
                  Experience complete peace of mind with the Premium Plan. Enjoy unlimited consultations and access to specialists.
                </p>
                <p className="text-3xl font-bold text-gray-900 text-left mb-2">
                  ₦5,000 <span className="text-sm font-normal">/month</span>
                </p>
                <hr className="border-t border-gray-200 mb-4" />
                <ul className="space-y-3 text-left text-gray-600 text-base">
                  {renderFeatures([
                    "Unlimited users",
                    "3 consultations (chat or call)",
                    "Access to specialist doctors",
                    "Comprehensive medical records",
                    "Personalized health programs",
                    "Virtual health check-ups and reminders",
                    "24/7 premium customer support",
                  ])}
                </ul>
              </div>
              <button className="mt-6 bg-blue-100 text-blue-700 py-2 px-4 rounded-xl font-medium hover:bg-blue-200">
                Upgrade to Premium plan →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#e6efff] py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-12">
          {/* Left Side – Static FAQ Info */}
          <div className="bg-[#3274ff] text-white p-10 rounded-2xl shadow-xl w-full md:w-[45%] mb-10 md:mb-0 md:sticky md:top-32 self-start h-fit">
            <h3 className="text-4xl font-bold mb-5 leading-snug">FAQs</h3>
            <p className="text-base leading-relaxed mb-8">
              Got questions? We’ve compiled answers to some of the most common inquiries to help you navigate your online consultation experience with ease and confidence.
            </p>
            <button className="bg-white text-[#3274ff] px-5 py-3 text-base font-semibold rounded-xl hover:bg-gray-100 transition">
              Learn more →
            </button>
          </div>

          {/* Right Side – Expandable FAQs */}
          <div className="space-y-4 w-full md:w-[55%]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center p-5 font-medium text-gray-900 hover:bg-gray-50 text-lg"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl font-bold">
                    {openFAQ === index ? "✕" : "+"}
                  </span>
                </button>

                <div
                  className={`px-5 text-base text-gray-700 overflow-hidden transition-all duration-300 ${
                    openFAQ === index
                      ? "max-h-[500px] opacity-100 py-3"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  <div>{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;