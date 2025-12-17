import ParticleField from './ParticleField';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParticleField />

      {/* Background spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Geometric accent lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <div className="relative flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono text-white/70 tracking-wider">SYSTEM ONLINE</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tighter leading-tight animate-fade-in-up delay-100">
            <span className="opacity-90">AI-Based</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">Job Role Predictor</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-10 font-light max-w-2xl mx-auto animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            Unlock your career potential. Our machine learning engine analyzes your skill set to predict your perfect job match with precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <a
              href="https://ml-project-gzcuq3skbnznxa33ukikdo.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-white text-black font-medium tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] inline-block"
            >
              <span className="relative z-10">Start Prediction</span>
            </a>

            <button className="group px-8 py-4 rounded-full border border-white/20 bg-transparent text-white hover:bg-white/5 transition-all">
              <span className="text-sm font-mono tracking-widest uppercase">Learn More</span>
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
      </div>
    </section>
  );
};

export default HeroSection;
