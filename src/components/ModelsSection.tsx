import LightRays from '@/components/ui/light-rays';

const models = [
  {
    name: 'Logistic Regression',
    features: [
      'Acts as the baseline classifier',
      'Good for linear boundaries',
      'Very fast and interpretable',
    ],
    color: 'from-cyan-400 to-blue-500',
    border: 'group-hover:border-cyan-500/50',
    shadow: 'shadow-cyan-500/20',
    iconColor: 'bg-cyan-400'
  },
  {
    name: 'Random Forest Classifier',
    features: [
      'Handles non-linear data',
      'More accurate and stable',
      'Works well with mixed skill combinations',
    ],
    color: 'from-emerald-400 to-green-500',
    border: 'group-hover:border-emerald-500/50',
    shadow: 'shadow-emerald-500/20',
    iconColor: 'bg-emerald-400'
  },
];

const ModelsSection = () => {
  return (
    <section className="py-32 px-6 relative bg-black overflow-hidden">
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#4cc9f0" // Cyan/Light Blue for ML vibe
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="opacity-40"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            ML Models Architecture
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {models.map((model, index) => (
            <div
              key={index}
              className="relative group block h-full"
            >
              {/* Card Container */}
              <div className={`relative h-full p-10 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${model.border} ${model.shadow}`}>

                {/* Title */}
                <h3 className={`text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r ${model.color}`}>
                  {model.name}
                </h3>

                {/* Features List */}
                <ul className="space-y-6">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4">
                      <div className={`mt-1.5 w-2 h-2 rounded-full ${model.iconColor} shadow-[0_0_10px_currentColor]`} />
                      <span className="text-lg text-zinc-300 font-light leading-relaxed group-hover:text-white transition-colors">
                        {feature}
                      </span>
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
