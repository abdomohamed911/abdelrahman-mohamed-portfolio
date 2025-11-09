import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "IBM",
    role: "Learning Facilitator",
    period: "Apr 2021 - Present",
    description: [
      "Facilitate technology-focused learning experiences for participants across various skill levels",
      "Support learners in understanding complex technical concepts and practical applications",
      "Provide guidance and resources to enhance learning outcomes in technology-related subjects",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "Sprints",
    role: "Generative AI Trainee",
    period: "Jan 2025 - Mar 2025",
    description: [
      "Successfully completed the GAIC Program with comprehensive training in AI-driven digital marketing",
      "Developed expertise in prompt engineering techniques for optimizing AI tool performance",
      "Implemented Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs)",
      "Applied AI techniques to digital marketing strategies and audience targeting",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "Udacity",
    role: "Frontend Web Developer",
    period: "Sep 2024 - Jan 2025",
    description: [
      "Developed responsive web interfaces using modern frontend technologies",
      "Collaborated with development teams to implement user-friendly web applications",
      "Applied best practices in HTML5, CSS, and JavaScript for cross-browser compatibility",
      "Participated in code reviews and debugging processes to ensure high-quality deliverables",
    ],
    color: "from-cyan-500 to-teal-500",
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in tech, from education to development and AI
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-30 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%] md:text-right"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              </div>

              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <div className="group relative p-8 glass-card rounded-2xl hover:bg-primary/5 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 glass-card rounded-lg bg-gradient-to-br ${exp.color}`}>
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div className={index % 2 === 0 ? "" : "md:text-right md:flex-1"}>
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className={`space-y-3 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-3">
                          <span className={`text-primary mt-1 ${index % 2 === 0 ? "" : "md:order-2"}`}>
                            •
                          </span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Animated corner accent */}
                  <div
                    className={`absolute -bottom-10 ${
                      index % 2 === 0 ? "-right-10" : "-left-10"
                    } w-40 h-40 bg-gradient-to-br ${exp.color} rounded-full blur-3xl opacity-20 group-hover:scale-150 transition-transform duration-700`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
