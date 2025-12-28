import { WavyBackground } from '@/components/ui/wavy-background';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="relative flex flex-col items-center text-center px-6">


          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tighter leading-tight animate-fade-in-up delay-100">
            <span className="opacity-90">AI-Based</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">Job Role Predictor</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-10 font-bold max-w-3xl mx-auto animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            Unlock your career potential. Our machine learning engine analyzes your skill set to predict your perfect job match with precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <a
              href="https://ml-project-gzcuq3skbnznxa33ukikdo.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-zinc-900 gap-2 tracking-wide">
                Start Prediction
                <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </span>
            </a>

            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-base font-medium hover:bg-white/10 transition-all hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-sm tracking-wide">
              Learn More
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 animate-fade-in-up delay-400 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="text-center">
              <p className="text-3xl font-light text-white">98%</p>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Accuracy</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="text-center">
              <p className="text-3xl font-light text-white">50+</p>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Roles</p>
            </div>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default HeroSection;
