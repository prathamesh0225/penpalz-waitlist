import React from 'react';

const WaitlistForm = () => {
  return (
    <section id="waitlist-form" className="bg-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Stop Procrastinating. Start Building.
          </h2>
          <p className="mt-4 text-gray-300">
            Your next chapter starts with a single step. Join the waitlist to secure your spot in the private beta and find the partner who will help you launch your project.
          </p>
          <form className="mt-10 space-y-6">
            <div>
              <label htmlFor="goal" className="mb-2 block text-left text-sm font-medium text-gray-300">
                What is the #1 goal you want to achieve in the next 6 months?
              </label>
              <input
                type="text"
                id="goal"
                name="goal"
                placeholder="e.g., Launch my SaaS business"
                className="w-full rounded-lg border border-white/20 bg-brand-dark p-3 text-white placeholder-gray-500 focus:border-brand-teal focus:ring-brand-teal"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
                className="w-full rounded-lg border border-white/20 bg-brand-dark p-3 text-white placeholder-gray-500 focus:border-brand-teal focus:ring-brand-teal"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-teal py-3.5 text-lg font-semibold text-brand-dark transition hover:bg-opacity-90"
            >
              I'm Ready to Build
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;