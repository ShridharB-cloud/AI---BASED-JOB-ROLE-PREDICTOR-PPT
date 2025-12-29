import { BackgroundCircles } from "@/components/ui/background-circles";

const EngineSection = () => {
  return (
    <div className="relative">
      <BackgroundCircles
        title=""
        description=""
        variant="tertiary"
        className="h-auto py-32 bg-black dark:bg-black"
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Text */}
            <div className="space-y-6 text-left">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                Understanding the Engine
              </h2>
              <div className="w-16 h-px bg-foreground/30" />
              <p className="text-white leading-relaxed text-lg">
                Our model uses skill inputs and applies ML algorithms to classify job roles.
                Using Logistic Regression and Random Forest, the system analyzes keywords
                and predicts the best-fit career path.
              </p>
            </div>

            {/* Right side - Abstract ML Graphic */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-foreground/10 animate-pulse-glow" />

                {/* Middle ring */}
                <div className="absolute inset-8 rounded-full border border-foreground/20" />

                {/* Inner core */}
                <div className="absolute inset-16 rounded-full bg-surface-elevated border border-foreground/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-foreground/40 glow-subtle" />
                </div>

                {/* Neural connection lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <div
                    key={angle}
                    className="absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-foreground/20 to-transparent origin-left"
                    style={{ transform: `rotate(${angle}deg)` }}
                  />
                ))}

                {/* Data nodes */}
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <div
                    key={angle}
                    className="absolute w-2 h-2 rounded-full bg-foreground/30"
                    style={{
                      top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                      left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BackgroundCircles>
    </div>
  );
};

export default EngineSection;
