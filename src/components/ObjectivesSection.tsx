import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const objectives = [
  {
    title: "Data Transformation",
    description: "Convert user skill input into machine-understandable form",
    icon: "01"
  },
  {
    title: "Feature Extraction",
    description: "Extract important keywords",
    icon: "02"
  },
  {
    title: "Model Training",
    description: "Train Logistic Regression & Random Forest on labeled job-role data",
    icon: "03"
  },
  {
    title: "Role Prediction",
    description: "Predict job roles with confidence scores",
    icon: "04"
  },
  {
    title: "Result Delivery",
    description: "Provide simple, fast, and clear output results",
    icon: "05"
  }
];

const ObjectivesSection = () => {
  return (
    <section className="py-32 px-6 relative bg-black overflow-hidden">
      {/* Background Gradient Mesh (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Project Objectives
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            The core workflow of our prediction engine, broken down into five key steps.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent transform md:-translate-x-1/2 hidden md:block" />
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-white/10 md:hidden" />

          <div className="space-y-12 md:space-y-24">
            {objectives.map((obj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >

                {/* Content Card */}
                <div className="flex-1 w-full pl-16 md:pl-0 text-left md:text-right group">
                  <div className={cn(
                    "p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 hover:border-purple-500/30",
                    index % 2 !== 0 && "md:text-left"
                  )}>
                    <h3 className="text-2xl font-bold text-white mb-2">{obj.title}</h3>
                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {obj.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 w-14 h-14 rounded-full bg-black border-4 border-black z-10 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <div className="w-full h-full rounded-full bg-zinc-900 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                    <span className="font-mono font-bold text-purple-400">{obj.icon}</span>
                  </div>
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
