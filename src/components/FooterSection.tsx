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
        <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">Ready to Predict?</h3>
        <p className="text-lg text-zinc-500 leading-relaxed mb-10 font-light">
          An advanced ML-powered analysis engine designed to align human potential with industry demands.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400">STATUS: OPERATIONAL</span>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default FooterSection;
