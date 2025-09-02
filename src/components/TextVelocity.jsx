import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

export function TextVelocity() {

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
        <ScrollVelocityRow baseVelocity={20} direction={1}>
          Penpalz
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={20} direction={-1}>
          Penpalz
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default TextVelocity;


