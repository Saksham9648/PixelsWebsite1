import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import PricingCard from "@/components/PricingCard";
import { PricingCardProps } from "@/lib/types";

const webPlans: PricingCardProps[] = [
  {
    title: "Basic",
    price: "₹6,999",
    description: "Perfect for small businesses just getting started with their online presence.",
    features: [
      { included: true, text: "5-Page Website" },
      { included: true, text: "Mobile Responsive" },
      { included: true, text: "Contact Form" },
      { included: true, text: "Social Media Integration" },
      { included: false, text: "E-commerce Functionality" },
      { included: false, text: "Advanced SEO" }
    ]
  },
  {
    title: "Standard",
    price: "₹19,999",
    description: "Ideal for growing businesses looking to expand their digital footprint.",
    features: [
      { included: true, text: "10-Page Website" },
      { included: true, text: "Mobile Responsive" },
      { included: true, text: "Advanced Contact Forms" },
      { included: true, text: "Social Media Integration" },
      { included: true, text: "Basic E-commerce (up to 50 products)" },
      { included: true, text: "Standard SEO Package" }
    ],
    popular: true
  },
  {
    title: "Premium",
    price: "₹29,999+",
    description: "Complete solution for established businesses seeking maximum online impact.",
    features: [
      { included: true, text: "Unlimited Pages" },
      { included: true, text: "Mobile Responsive" },
      { included: true, text: "Custom Forms & Integrations" },
      { included: true, text: "Advanced Social Media Integration" },
      { included: true, text: "Full E-commerce Functionality" },
      { included: true, text: "Comprehensive SEO Package" }
    ]
  }
];

const appPlans: PricingCardProps[] = [
  {
    title: "Basic Plan",
    price: "₹40,000",
    description: "Android app only (up to 5 screens)",
    features: [
      { included: true, text: "Clean UI with static content" },
      { included: true, text: "No login or database" },
      { included: true, text: "Basic contact/feedback form" },
      { included: true, text: "Delivery in 2–3 weeks" },
    ]
  },
  {
    title: "Standard Plan",
    price: "₹90,000",
    description: "Android + iOS (using Flutter)",
    features: [
      { included: true, text: "6–10 screens with interactive UI" },
      { included: true, text: "Login/Signup with Firebase" },
      { included: true, text: "Basic admin panel" },
      { included: true, text: "Push notifications" },
      { included: true, text: "Delivery in 4–6 weeks" },
    ],
    popular: true
  },
  {
    title: "Premium Plan",
    price: "₹2,00,000",
    description: "Custom Android + iOS app",
    features: [
      { included: true, text: "Full backend with Node.js or Laravel" },
      { included: true, text: "Admin dashboard" },
      { included: true, text: "Advanced features: payment, chat, maps" },
      { included: true, text: "App store deployment" },
      { included: true, text: "Delivery in 8–10 weeks" },
    ]
  }
];

const seoPlans: PricingCardProps[] = [
  {
    title: "Basic SEO",
    price: "₹6,000/month",
    description: "Essential SEO support for small businesses.",
    features: [
      { included: true, text: "10 keywords" },
      { included: true, text: "On-page optimization" },
      { included: true, text: "Google Business Profile optimization" },
      { included: true, text: "Monthly performance report" }
    ]
  },
  {
    title: "Standard SEO",
    price: "₹15,000/month",
    description: "Balanced plan for growing visibility.",
    features: [
      { included: true, text: "25 keywords" },
      { included: true, text: "On-page + off-page SEO" },
      { included: true, text: "4 backlinks per month" },
      { included: true, text: "Technical SEO (speed, mobile, schema)" },
      { included: true, text: "Monthly detailed report" }
    ],
    popular: true
  },
  {
    title: "Premium SEO",
    price: "₹35,000/month",
    description: "Complete SEO strategy for competitive industries.",
    features: [
      { included: true, text: "50+ keywords" },
      { included: true, text: "Full SEO suite (technical, local, on-page, off-page)" },
      { included: true, text: "8+ backlinks/month" },
      { included: true, text: "Blog content & competitor analysis" },
      { included: true, text: "Weekly reports + strategy meetings" }
    ]
  }
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | PixelsBeing</title>
        <meta name="description" content="Transparent pricing for web development, app development, and SEO services. Tailored plans for startups, growing businesses, and enterprises." />
      </Helmet>

      <section className="py-32 relative grid-bg">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Our <span className="gradient-text">Pricing Plans</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the perfect plan for your website, app, or SEO needs. Clear, competitive pricing with professional delivery.
            </p>
          </motion.div>

          {/* Web Development Plans */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Web Development Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <PricingCard {...plan} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* App Development Plans */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center">App Development Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {appPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <PricingCard {...plan} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* SEO Plans */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center">SEO Services (Monthly Plans)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seoPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <PricingCard {...plan} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Custom Quote CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Need something custom? We'll tailor a solution just for you.
            </p>
            <Link href="/contact">
              <a className="relative bg-card hover:bg-card/70 text-foreground px-8 py-3 rounded-full transition-all duration-300 font-medium border border-primary/30">
                Request Custom Quote
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
