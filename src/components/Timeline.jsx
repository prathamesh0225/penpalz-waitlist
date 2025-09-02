import React from 'react';

const TimelineItem = ({ status, title, children }) => {
  const isComplete = status.toLowerCase() === 'complete';
  const isInProgress = status.toLowerCase() === 'in progress';

  return (
    <div className="relative pl-8">
      <div className={`absolute left-0 top-1.5 h-4 w-4 rounded-full ${isInProgress ? 'animate-pulse bg-brand-teal' : isComplete ? 'bg-brand-teal' : 'bg-gray-500'}`}></div>
      <div className="pl-4">
        <span
          className={`mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
            isInProgress ? 'bg-brand-teal/20 text-brand-teal' : isComplete ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
          }`}
        >
          {status}
        </span>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{children}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          The Roadmap to Launch.
        </h2>
      </div>
      <div className="relative mx-auto mt-12 max-w-xl">
        <div className="absolute left-[7px] top-0 h-full w-0.5 bg-gray-600"></div>
        <div className="space-y-10">
          <TimelineItem status="In Progress" title="Foundation (September - October 2025)">
            We are currently building the core platform, refining the goal-matching algorithm, and designing the user experience.
          </TimelineItem>
          <TimelineItem status="Upcoming" title="Private Beta for Waitlist (November 2025)">
            This is you! Waitlist members will get the exclusive first invitation to join our inaugural "30-Day Goal Sprint." You will help us shape the future of the platform.
          </TimelineItem>
          <TimelineItem status="Upcoming" title="Public Launch (Q1 2026)">
            Penpalz will be available on the iOS App Store and Google Play Store for the next generation of builders, creators, and leaders.
          </TimelineItem>
        </div>
      </div>
    </section>
  );
};

export default Timeline;