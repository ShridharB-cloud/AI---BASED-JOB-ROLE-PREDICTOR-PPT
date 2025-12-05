const FooterSection = () => {
  return (
    <footer className="py-24 px-6 relative overflow-hidden">
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
        
        {/* Subtle geometric shapes */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 border border-foreground/5 rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 border border-foreground/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          An ML-powered mini project designed to help students understand which job role matches their skill set.
        </p>
        
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="w-12 h-px bg-foreground/20" />
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
          <span className="w-12 h-px bg-foreground/20" />
        </div>
        
        <p className="font-mono text-sm text-muted-foreground/60">
          AI-Based Job Role Predictor
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
