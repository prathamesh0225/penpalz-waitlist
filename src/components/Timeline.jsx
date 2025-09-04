import React from "react";
import { ArcTimeline } from "@/components/magicui/arc-timeline";
import {
  RocketIcon,
  CubeIcon,
  LockClosedIcon,
  GlobeIcon,
  GearIcon,
  LightningBoltIcon,
  StarIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
const data = [
    {
    time: "2025",
    steps: [
      {
        icon: <RocketIcon width={20} height={20} />,
        content:
          "Founded Penpalz, a platform that connects people with like-minded individuals to achieve their goals together.",

      },
      {
        icon: <CubeIcon width={20} height={20} />,
        content:
          "Launch our private beta and onboard the first wave of trailblazers.",
      },
      {
        icon: <GlobeIcon width={20} height={20} />,
        content:
          "Form the first global squads to achieve goals together.",
      },
    ],
  },
  {
    time: "2026",
    steps: [
      {
        icon: <LockClosedIcon width={20} height={20} />,
        content: "Introduce some new features that boost your growth by 50x.",

      },
      {
        icon: <GearIcon width={20} height={20} />,
        content:
          "Implemented enhanced machine learning algorithms for matching users",

      },
    ],
  },
]

const Timeline = () => {
  return (
    <div className="mt-24" id="timeline">
      <div className="mx-auto mb-16 max-w-2xl text-center z-20">
        <h2 className="text-3xl font-bold text-gray-300 md:text-4xl">
          Timeline
        </h2>
      </div>

      <div className="flex justify-center">
        <ArcTimeline
          data={data}
          className="w-full max-w-[360px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]"
        />
      </div>
    </div>
  );
};

export default Timeline;
