import { motion } from 'motion/react';
import { 
  Stethoscope, 
  MessageCircle, 
  FileText, 
  TrendingUp, 
  Clock, 
  Shield,
  Smartphone,
  Database
} from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: "Electronic Health Records",
    description: "Comprehensive patient data management with real-time updates and seamless provider collaboration.",
    benefits: ["Real-time updates", "Provider collaboration", "Patient history tracking"]
  },
  {
    icon: MessageCircle,
    title: "Patient Communication",
    description: "Secure messaging platform for seamless communication between patients and healthcare providers.",
    benefits: ["Secure messaging", "Multi-channel support", "Automated notifications"]
  },
  {
    icon: FileText,
    title: "Clinical Documentation",
    description: "Streamlined documentation tools with voice recognition and template customization.",
    benefits: ["Voice recognition", "Custom templates", "Quick documentation"]
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Advanced analytics for population health management and predictive care insights.",
    benefits: ["Population health", "Predictive insights", "Risk assessment"]
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description: "Continuous patient monitoring with alerts for critical changes in health status.",
    benefits: ["24/7 monitoring", "Critical alerts", "Remote tracking"]
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Multi-layer security protocols ensuring HIPAA compliance and data protection.",
    benefits: ["HIPAA compliant", "Data encryption", "Access controls"]
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Full-featured mobile apps for providers and patients with offline capabilities.",
    benefits: ["Offline access", "Cross-platform", "Real-time sync"]
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration with existing systems and third-party healthcare platforms.",
    benefits: ["API connectivity", "Legacy system support", "Data migration"]
  }
];

export function FeaturesShowcase() {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-4 font-semibold">Advanced Healthcare Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make HEALTHSPIRE the leading choice for healthcare providers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="relative p-6 bg-card rounded-2xl border border-border shadow-lg overflow-hidden h-full"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{
                  rotateY: 2,
                  rotateX: 2,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotateY: 180, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>

                  <h3 className="text-lg mb-3 font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefit}
                        className="flex items-center text-xs text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + benefitIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* 3D shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-2xl transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to transform your healthcare facility with MINDSPIRE's powerful healthcare technology?
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}