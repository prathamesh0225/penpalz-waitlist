import React from "react";
import { ArcTimeline } from "@/components/magicui/arc-timeline";

const data = [
  {
    time: "2025",
    steps: [
      { icon: <span>🚀</span>, content: "Launched v1" },
      { icon: <span>✨</span>, content: "Improved UX" },
    ],
  },
  {
    time: "2026",
    steps: [{ icon: <span>📈</span>, content: "Growth" }],
  },
];

const Timeline = () => {
  return (
    <div className="mt-24">
      <div className="mx-auto mb-16 max-w-2xl text-center z-20 sticky top-25">
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
