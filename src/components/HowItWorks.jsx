import React from 'react';

const Step = ({ number, title, children }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-teal font-bold text-brand-teal">
      {number}
    </div>
    <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            From Connection to Achievement in 3 Steps.
          </h2>
        </div>
        <div className="relative mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-12 md:gap-20">
          
          <div className="absolute left-4 top-4 hidden h-full w-px bg-brand-teal/30 md:block"></div>
          
          <Step number="1" title="Define Your Mission">
            Create your Growth Profile in under 2 minutes. We don't care where you've been; we care where you're going. Pinpoint your #1 goal, the skills you have, and the skills you need.
          </Step>
          <Step number="2" title="Find Your Co-Pilot">
            Our hybrid algorithm presents you with a curated feed of potential partners. See a clear "Goal Compatibility Score" for each match and connect with people who are on the same trajectory.
          </Step>
          <Step number="3" title="Launch Your Action Plan">
            Use our core "Shared Action Plan" to set mutual milestones, track weekly tasks, and hold each other accountable. It’s a shared blueprint for success, built right into your chat.
          </Step>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;