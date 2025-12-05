const models = [
  {
    name: 'Logistic Regression',
    features: [
      'Acts as the baseline classifier',
      'Good for linear boundaries',
      'Very fast and interpretable',
    ],
  },
  {
    name: 'Random Forest Classifier',
    features: [
      'Handles non-linear data',
      'More accurate and stable',
      'Works well with mixed skill combinations',
    ],
  },
];

const ModelsSection = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            ML Models Used
          </h2>
          <div className="w-16 h-px bg-foreground/30 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-foreground/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative p-8 rounded-xl border border-foreground/10 bg-card glow-border hover:border-foreground/20 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-6 font-mono">
                  {model.name}
                </h3>
                
                <ul className="space-y-4">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
