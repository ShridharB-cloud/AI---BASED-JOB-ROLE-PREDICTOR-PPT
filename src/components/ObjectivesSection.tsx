const objectives = [
  'Convert user skill input into machine-understandable form',
  'Extract important keywords',
  'Train Logistic Regression & Random Forest on labeled job-role data',
  'Predict job roles with confidence scores',
  'Provide simple, fast, and clear output results',
];

const ObjectivesSection = () => {
  return (
    <section className="py-32 px-6 relative bg-grid">
      {/* Gradient overlay to fade grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Objectives
          </h2>
          <div className="w-16 h-px bg-foreground/30 mx-auto" />
        </div>
        
        <div className="space-y-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start gap-6 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center text-sm font-mono text-muted-foreground group-hover:border-foreground/40 group-hover:text-foreground transition-colors">
                {index + 1}
              </div>
              <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors pt-1">
                {objective}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
