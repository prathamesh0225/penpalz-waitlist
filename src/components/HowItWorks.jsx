import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

const steps = [
  {
    title: "Define Your Mission",
    description:
      "Create your Growth Profile in under 2 minutes. Pinpoint your #1 goal, the skills you have, and the skills you need to get there.",
    image: "/assets/4.png",
  },
  {
    title: "Find Your Co-Pilot",
    description:
      "Our algorithm presents a curated feed of potential partners. See a 'Goal Compatibility Score' for each and connect with people on the same trajectory.",
    image: "/images/how-it-works-2.png",
  },
  {
    title: "Launch Your Action Plan",
    description:
      "Use our 'Shared Action Plan' to set mutual milestones, track weekly tasks, and hold each other accountable. It’s your blueprint for success.",
    image: "/images/how-it-works-3.png",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="overflow-hidden bg-brand-dark py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="mx-auto mb-12 max-w-2xl text-center z-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300">
            How It Works
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-start">
          {/* Steps */}
          <div className="space-y-8 md:ml-32 md:pt-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)} // mobile-friendly
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 font-bold text-sm sm:text-base transition-all duration-300 ${
                      activeStep === index
                        ? "border-brand-teal bg-brand-teal text-brand-dark"
                        : "border-gray-600 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${
                      activeStep === index ? "text-brand-teal" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`mt-2 pl-10 sm:pl-12 text-sm sm:text-base text-gray-400 transition-opacity duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* iPhone Mockups */}
          <div className="relative flex h-[400px] sm:h-[500px] md:h-[650px] items-center justify-center">
            {/* Left angled iPhone */}
            <motion.div
              key={`left-${activeStep}`}
              initial={{ opacity: 0, rotate: -15, x: -50, scale: 0.75 }}
              animate={{ opacity: 0.3, rotate: -10, x: -30, scale: 0.8 }}
              exit={{ opacity: 0, rotate: -20, x: -60, scale: 0.7 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute hidden sm:block"
            >
              <Iphone15Pro className="h-[400px] md:h-[550px] w-auto">
                <div className="h-full w-full rounded-[inherit] bg-brand-dark" />
              </Iphone15Pro>
            </motion.div>

            {/* Right angled iPhone */}
            <motion.div
              key={`right-${activeStep}`}
              initial={{ opacity: 0, rotate: 15, x: 50, scale: 0.75 }}
              animate={{ opacity: 0.3, rotate: 10, x: 30, scale: 0.8 }}
              exit={{ opacity: 0, rotate: 20, x: 60, scale: 0.7 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute hidden sm:block"
            >
              <Iphone15Pro className="h-[400px] md:h-[550px] w-auto">
                <div className="h-full w-full rounded-[inherit] bg-brand-dark" />
              </Iphone15Pro>
            </motion.div>

            {/* Center active iPhone */}
            <motion.div
              key={`center-${activeStep}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Iphone15Pro className="h-[350px] sm:h-[500px] md:h-[600px] w-auto">
                <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-brand-dark">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={steps[activeStep].image}
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      className="absolute h-full w-full object-cover"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                </div>
              </Iphone15Pro>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
