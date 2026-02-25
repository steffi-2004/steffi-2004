import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <section className="min-h-screen">
      <HeroBackground />

      <div className="relative z-10 flex items-center min-h-screen  px-50">
        <div className="flex flex-col gap-6 max-w-2/5">
          <h1
            className="text-5xl font-medium leading-tight text-[#0e0e0f]"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Introduce Your Product <br /> Quickly &amp; Effectively
          </h1>

          <p className="text-[#6B7A99] text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>

          <p className="text-[#6B7A99] text-base leading-relaxed">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>

          <div className="flex gap-4 mt-2">
            <button className="px-8 py-3 bg-[#1B2559] text-white text-sm font-semibold rounded hover:bg-[#141c47] transition-colors">
              Purchase UI Kit
            </button>
            <button className="px-8 py-3 border border-[#1B2559] text-[#1B2559] text-sm font-semibold rounded hover:bg-[#1B2559] hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
