const predictions = [
  {
    input: 'HTML, CSS, JavaScript',
    output: 'Frontend Developer',
  },
  {
    input: 'Python, SQL, APIs',
    output: 'Backend Developer',
  },
  {
    input: 'Python, Pandas, ML Algorithms',
    output: 'Machine Learning Engineer',
  },
];

const PredictionDemo = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Prediction Demo
          </h2>
          <div className="w-16 h-px bg-foreground/30 mx-auto" />
        </div>
        
        <div className="space-y-6">
          {predictions.map((prediction, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-foreground/10 bg-card glow-subtle hover:border-foreground/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Input
                  </span>
                  <p className="font-mono text-foreground/90 mt-1">
                    "{prediction.input}"
                  </p>
                </div>
                
                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-8 h-px bg-foreground/30" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-foreground/30" />
                </div>
                
                <div className="flex-1">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Prediction
                  </span>
                  <p className="font-semibold text-foreground mt-1">
                    {prediction.output}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PredictionDemo;
