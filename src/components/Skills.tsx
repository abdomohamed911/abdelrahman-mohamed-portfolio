import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS", "Responsive Design", "Cross-browser Compatibility"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    category: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras", "Deep Learning", "NLP", "Machine Learning"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Generative AI",
    skills: ["RAG Systems", "LLMs", "Prompt Engineering", "AI Integration"],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Development Tools",
    skills: ["Git", "Debugging", "Code Review", "Microservices", "SQL"],
    color: "from-teal-500 to-green-500",
  },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="group relative glass-card p-8 rounded-2xl hover:bg-primary/5 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.15 + skillIndex * 0.05,
                      }}
                      className="relative group/skill"
                    >
                      <div className="px-4 py-2 glass-card rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-default">
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                      
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Animated corner accent */}
              <div
                className={`absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-20 group-hover:scale-150 transition-transform duration-700`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Technologies", value: "15+" },
            { label: "Projects Completed", value: "20+" },
            { label: "Certifications", value: "3+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 glass-card rounded-2xl hover:bg-primary/5 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
