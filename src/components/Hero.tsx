import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 glass-card text-sm font-medium text-primary rounded-full">
            Software Engineer & AI Enthusiast
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block">Hi, I'm</span>
          <span className="block text-gradient animate-gradient-shift bg-[length:200%_auto]">
            Abdelrahman
          </span>
          <span className="block">Mohamed</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Building innovative web experiences and AI-powered solutions. Passionate about
          frontend development, machine learning, and creating impactful digital products.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] transition-all duration-300"
          >
            View My Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-card border-primary/50 hover:bg-primary/10"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { Icon: Github, href: "#", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com/in/eng-abdelrahmanmohamed", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:Abdelrahmanmohamed9112@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="sr-only">{label}</span>
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </motion.div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-[10%] w-20 h-20 border-2 border-primary/30 rounded-lg"
          animate={{
            rotate: [0, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-[15%] w-16 h-16 border-2 border-secondary/30"
          animate={{
            rotate: [0, -360],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-[8%] w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};
