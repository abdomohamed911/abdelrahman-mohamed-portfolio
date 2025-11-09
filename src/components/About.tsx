import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Brain, Sparkles, GraduationCap } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Code2, description: "React, TypeScript, HTML5, CSS" },
  { name: "AI & Machine Learning", icon: Brain, description: "TensorFlow, Keras, NLP" },
  { name: "Generative AI", icon: Sparkles, description: "RAG, LLMs, Prompt Engineering" },
  { name: "Continuous Learning", icon: GraduationCap, description: "IBM Facilitator, Tech Education" },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Software Engineering student at Alamein International University with a passion
            for creating innovative web experiences and AI-powered solutions. Currently working as
            a Learning Facilitator at IBM while completing my degree.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full p-6 glass-card rounded-2xl hover:bg-primary/5 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 glass-card rounded-xl bg-primary/10">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>

                {/* Animated corner accent */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">My Journey</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Currently pursuing my Bachelor's degree in Computer Science at Alamein International
                University (2023-2027), I've been passionate about technology and innovation from
                the start.
              </p>
              <p>
                My experience spans from frontend development at Udacity, where I honed my skills
                in creating responsive web interfaces, to diving deep into Generative AI as a
                trainee at Sprints, working with RAG systems and LLMs.
              </p>
              <p>
                As a Learning Facilitator at IBM since 2021, I've had the privilege of helping
                others understand complex technical concepts, which has deepened my own
                understanding and communication skills.
              </p>
              <p>
                I'm particularly interested in the intersection of web development and AI, and I'm
                always exploring new ways to create intelligent, user-friendly applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
