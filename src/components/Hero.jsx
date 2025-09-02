import React from 'react';
import { Highlighter } from "@/components/magicui/highlighter";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-24 text-center md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          <Highlighter action="box" color="#FF9800">Ambition</Highlighter> is Better, <Highlighter action="underline" color="#2DD4BF">Together.</Highlighter>
        </h1>
        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          Don't let your great ideas fade in isolation. Penpalz connects you with a driven partner who shares your ambition, helping you stay motivated, focused, and on track.
        </p>
        <a
          href="#waitlist-form"
          className="mt-10 inline-block rounded-lg bg-brand-teal px-8 py-4 text-lg font-semibold text-brand-dark transition hover:bg-opacity-90"
        >
          <InteractiveHoverButton>Find Your Penpal</InteractiveHoverButton>
        </a>
      </div>
    </section>
  );
};

export default Hero;