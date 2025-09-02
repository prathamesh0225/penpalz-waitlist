import React from "react";
import { TextReveal } from "@/components/magicui/text-reveal";

const PerkCard = ({ label, title, description, reverse }) => (
  <div
    className={`flex flex-col md:flex-row items-center justify-between gap-8 my-20 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >


    <div className="w-full md:w-1/2">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              <p className="text-lg uppercase tracking-wide text-[#2DD4BF] mb-2 text-center">


        {label}
      </p>
        <TextReveal>{title}</TextReveal>
      </h3>
    </div>

    {/* Description */}
    <div className="w-full md:w-1/2">
      <p className="text-gray-400 leading-relaxed px-16">{description}</p>
    </div>
  </div>
);

const Perks = () => {
  return (
    <section id="perks" className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-3xl text-center mb-16 sticky top-25">
        <h2 className="text-center text-5xl font-bold text-gray-300">
          Perks
        </h2>
      </div>

      <PerkCard
        label="Perk 1"
        title="The Founder's Mark"
        description="Receive the permanent 'Founder' badge, a mark of prestige on your profile forever. It signifies you were a key part of our origin story."
      />

      <PerkCard
        label="Perk 2"
        title="Access the Pre-Launch Hub"
        description=" Join our private 'Founders Hub' on Discord. Connect with a curated community of driven individuals and help shape the future of Penpalz."
        reverse
      />

      <PerkCard
        label="Perk 3"
        title="The Lifetime Advantage"
        description="Your belief in us is rewarded with lifetime value. Lock in a permanent 50% discount on Penpalz Pro and always get premium access for less."
      />

      <PerkCard
        label="Perk 4"
        title=" Join the Vanguard"
        description="You're on the priority list. Be among the first people in the world to use Penpalz and join our inaugural '30-Day Goal Sprint.' Get a lifetime discount on Penpalz Pro."
        reverse
      />
    </section>
  );
};

export default Perks;
