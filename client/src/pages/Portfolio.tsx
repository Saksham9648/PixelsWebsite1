import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"; // assuming you're using shadcn/ui or add your carousel lib


import PortfolioItem from "@/components/PortfolioItem";
import { PortfolioItemProps } from "@/lib/types";

const portfolioItems: PortfolioItemProps[] = [
  {
    image: "https://i.postimg.cc/ZK86g0fc/Screenshot-2025-04-02-09-14-24-41-b5a5c5cb02ca09c784c5d88160e2ec24.jpg",
    title: "BeingxBot",
    description: "BeingxBot is a digital solutions platform powered by Pixels Being, offering innovative web development, SEO, and user-friendly digital experiences to enhance brand growth.",
    tags: ["Web Development", "Dynamic Platform", "UX Design"],
    link: "https://beingxbot.tech"
  },
  {
    image: "https://i.postimg.cc/zXZn0Tkv/Screenshot-2025-04-02-09-14-51-18-b5a5c5cb02ca09c784c5d88160e2ec24.jpg",
    title: "Bookify App",
    description: "Bookify by Pixels Being is a smart booking app that simplifies appointment scheduling with an intuitive and seamless experience.",
    tags: ["App Development", "UI/UX Design", "iOS & Android"],
    link: "https://play.google.com/store/apps/details?id=com.bookify.app"
  },
  {
    image: "https://i.postimg.cc/8CbMQygy/Picsart-24-12-30-11-55-57-575.png",
    title: "Home Tuition Wala SEO Campaign",
    description: "A comprehensive SEO strategy that increased organic traffic by 287% for a home tuition providing company.",
    tags: ["SEO", "Content Marketing", "Analytics"],
    link: "https://67738ad0644e61c07776d298--superlative-sprinkles-f01280.netlify.app/"
  },
  {
    image: "https://i.postimg.cc/c18RRFwP/Screenshot-2025-04-02-09-16-55-25-40deb401b9ffe8e1df2f1cc5ba480b12.jpg",
    title: "Narayan Home Tutors",
    description: "Narayan Home Tutors is a personalized tutoring platform developed by Pixels Being, connecting students with expert tutors for quality education at home or online.",
    tags: ["Web Development", "Security", "Edtech"],
    link: "https://narayanhometutors.in/"
  },
  {
    image: "https://i.postimg.cc/T3QgdFv5/Screenshot-2025-04-02-09-16-27-32-40deb401b9ffe8e1df2f1cc5ba480b12.jpg",
    title: "Tuition Hub",
    description: "Tuition Hub by Pixels Being is an advanced online platform connecting students with top tutors, offering seamless learning experiences.",
    tags: ["Web Development", "Edtech", "UI/UX Design"],
    link: "https://tuitionhub.in"
  },
  {
    image: "https://www.vakeel-saab.in/assets/logoalam-Dc0_dP_F.jpg",
    title: "Aftab Alam Law Firm",
    description: "Aftab Alam Law Firm by Pixels Being provides expert legal services with integrity, trust, and personalized care. Specializing in civil, criminal, and corporate law, we prioritize client success and professional excellence.",
    tags: ["Web Development", "Law Firm", "UI/UX Design"],
    link: "https://www.vakeel-saab.in/"
  },
];

const testimonials = [
  {
    name: "Amit Yadav",
    feedback: "Pixels Being transformed our idea into an actual working product better than we imagined! The team is incredibly professional.",
    company: "BeingxBot"
  },
  {
    name: "Sachin Kumar",
    feedback: "Our SEO traffic jumped massively after we partnered with Pixels Being. Their results speak volumes!",
    company: "Home Tuition Wala"
  },
  {
    name: "Ravi Nair",
    feedback: "They delivered our app on time with stunning UI. I’ll recommend them to anyone needing a mobile solution!",
    company: "Bookify App"
  },
   {
    name: "Aftab Alam Ansari",
    feedback: "Pixels Being created a professional, user-friendly website for our firm, effectively showcasing our expertise and boosting our online presence.",
    company: "Aftab Alam Law Firm"
  }
];
const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | PixelsBeing</title>
        <meta
          name="description"
          content="Explore our portfolio of web development, SEO, and app development projects. See how PixelsBeing has helped businesses in Lakhimpur, Gonda, Sitapur, and Lucknow achieve digital success."
        />
      </Helmet>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our recent projects that showcase our expertise and creativity. Each project represents our commitment to delivering exceptional digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <PortfolioItem {...item} />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Ready to create your own success story with us?
            </p>
            <Link href="/contact">
              <a className="animate-glow bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium">
                Start Your Project
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-23"
          >
            <h3 className="text-3xl font-bold text-center mb-10 text-white">What Our <span className="blue-text">Clients</span> Say</h3>
            <Carousel className="max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i} className="px-4">
                    <div className="bg-gradient-to-br from-blue-700/30 to-purple-800/30 p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 text-white relative overflow-hidden animate-glow">
                      <p className="text-lg mb-4 italic">"{t.feedback}"</p>
                      <div className="font-semibold">- {t.name}, {t.company}</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-20 text-center"
          ></motion.div>
    </>
  );
};

export default Portfolio;
