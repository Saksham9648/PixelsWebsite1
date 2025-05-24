import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { useEffect, useState } from "react";

// Enhanced Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [value]);

  return <span className="inline-block min-w-[40px]">{count}{suffix}</span>;
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Pixels Being</title>
        <meta name="description" content="Learn about Pixels Being - our story, mission and values. Professional web development, SEO, and app development services." />
      </Helmet>

      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} initial="initial" animate="animate" className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden card-3d h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/3 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/3 -right-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              
              {/* Stats Card - Now properly visible */}
              <motion.div 
                variants={fadeInUp}
                className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-border/50 max-w-xs z-20"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-2">
                    <h4 className="text-3xl font-bold gradient-text mb-1">
                      <AnimatedCounter value={5} />+
                    </h4>
                    <p className="text-muted-foreground text-xs font-medium">Years Experience</p>
                  </div>
                  <div className="text-center p-2">
                    <h4 className="text-3xl font-bold gradient-text mb-1">
                      <AnimatedCounter value={100} />+
                    </h4>
                    <p className="text-muted-foreground text-xs font-medium">Projects Completed</p>
                  </div>
                  <div className="text-center p-2">
                    <h4 className="text-3xl font-bold gradient-text mb-1">
                      <AnimatedCounter value={98} suffix="%" />
                    </h4>
                    <p className="text-muted-foreground text-xs font-medium">Client Satisfaction</p>
                  </div>
                  <div className="text-center p-2">
                    <h4 className="text-3xl font-bold gradient-text mb-1">
                      <AnimatedCounter value={10} />+
                    </h4>
                    <p className="text-muted-foreground text-xs font-medium">Team Members</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                About <span className="gradient-text">Pixels Being</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Founded in 2018, Pixels Being has grown from a small team of passionate developers to a full-service digital agency serving clients across India and beyond.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Our mission is to bridge the gap between technology and business success. We believe in creating digital experiences that not only look stunning but also drive tangible results for our clients.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-lightbulb text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-1">Innovative Solutions</h4>
                    <p className="text-muted-foreground">We constantly push the boundaries of what's possible in digital technology.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-users text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-1">Client-Focused Approach</h4>
                    <p className="text-muted-foreground">Your success is our top priority. We build long-term relationships based on trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-chart-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-1">Results-Driven Strategy</h4>
                    <p className="text-muted-foreground">We focus on delivering measurable results that impact your bottom line.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <a className="animate-glow bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium inline-block">
                  Get in Touch
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6-D Process Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Our <span className="gradient-text">6-D Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results for every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Discover",
                description: "We dive deep to understand your business goals, target audience, and market landscape.",
                icon: "🔍"
              },
              {
                title: "Define",
                description: "Clear objectives and success metrics are established to guide our strategy.",
                icon: "🎯"
              },
              {
                title: "Design",
                description: "Our creative team crafts visually stunning and user-friendly interfaces.",
                icon: "🎨"
              },
              {
                title: "Develop",
                description: "Using cutting-edge technologies, we build robust and scalable solutions.",
                icon: "💻"
              },
              {
                title: "Deploy",
                description: "We ensure seamless implementation and integration with your systems.",
                icon: "🚀"
              },
              {
                title: "Delight",
                description: "Ongoing support and optimization to ensure long-term success.",
                icon: "✨"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="mt-4 text-primary font-medium text-sm">
                  Step {index + 1}/6
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
