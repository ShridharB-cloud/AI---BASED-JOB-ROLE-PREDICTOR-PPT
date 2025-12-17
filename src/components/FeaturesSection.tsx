const features = [
  'Skill-based job role prediction',
  'Multi-class classification',
  'Confidence score estimation',
  'Simple input → quick output',
  'Lightweight and fast inference',
];

const FeaturesSection = () => {
  return (
    <section className="py-32 px-6 relative bg-background overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-background/90 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">
            Core Capabilities
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-light">
            Powered by advanced machine learning algorithms to deliver precise career guidance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-white ring-1 ring-white/10 group-hover:bg-white/10 group-hover:ring-white/20 transition-all">
                {/* Simple geometric icon placeholder if no specific icons are imported */}
                <div className="w-5 h-5 border-[1.5px] border-current rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              </div>

              <h3 className="text-xl font-medium text-white mb-3">
                {feature}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                Optimized for performance and accuracy, ensuring you get the best results instantly.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
