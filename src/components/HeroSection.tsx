import ParticleField from './ParticleField';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      
      {/* Background glow */}
      <div className="absolute inset-0 gradient-radial opacity-50" />
      
      {/* Geometric accent lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-foreground/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Subtle glow behind text */}
        <div className="absolute inset-0 blur-3xl bg-foreground/5 rounded-full scale-150" />
        
        <div className="relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 tracking-tight glow-text animate-fade-in-up">
            AI-Based Job Role Predictor
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            Predicting the most suitable job role from your skill set using ML.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <span className="w-8 h-px bg-foreground/30" />
            <p className="font-mono text-sm text-foreground/60 tracking-widest">
              Upload. Analyze. Predict.
            </p>
            <span className="w-8 h-px bg-foreground/30" />
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 animate-fade-in-up delay-500 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
