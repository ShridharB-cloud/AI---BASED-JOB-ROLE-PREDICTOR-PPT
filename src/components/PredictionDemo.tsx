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
    <section className="py-32 px-6 relative bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            Live Prediction Engine
          </h2>
          <p className="text-zinc-500">Real-time inference examples</p>
        </div>

        <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="ml-4 text-xs font-mono text-zinc-500">model_inference.py</div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-8">
            {predictions.map((prediction, index) => (
              <div key={index} className="group transition-all opacity-80 hover:opacity-100">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-zinc-600 select-none">$</span>
                  <p className="text-zinc-300">
                    analyze --skills <span className="text-white">"{prediction.input}"</span>
                  </p>
                </div>

                <div className="pl-6 space-y-1">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs">
                    <span>Processing...</span>
                    <span className="animate-pulse">_</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 p-3 rounded bg-white/5 border border-white/5 border-l-2 border-l-white">
                    <span className="text-zinc-400">Predicted Role:</span>
                    <span className="text-white font-bold tracking-wide">{prediction.output}</span>
                    <span className="ml-auto text-xs text-zinc-600">Conf: 9{8 - index}.{(index + 2) * 3}%</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
              <span className="text-green-500">➜</span>
              <span className="text-zinc-500">Ready for next input...</span>
              <span className="w-2 h-4 bg-white/50 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionDemo;
