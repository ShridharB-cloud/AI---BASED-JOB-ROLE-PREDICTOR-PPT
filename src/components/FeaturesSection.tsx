const features = [
  'Skill-based job role prediction',
  'Multi-class classification',
  'Confidence score estimation',
  'Simple input → quick output',
  'Lightweight and fast inference',
];

const FeaturesSection = () => {
  return (
    <section className="py-32 px-6 relative gradient-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Key Features
          </h2>
          <div className="w-16 h-px bg-foreground/30 mx-auto" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-foreground/10 bg-card/50 hover:border-foreground/20 hover:bg-card transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-foreground/30 group-hover:bg-foreground/60 transition-colors" />
                <p className="text-foreground/80 group-hover:text-foreground transition-colors">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
