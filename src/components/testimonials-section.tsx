import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Medical Officer",
    organization: "Metro General Hospital",
    content: "SPIREHEALTH has revolutionized our patient care workflow. The integrated EMR system has reduced documentation time by 40% and improved our care quality metrics significantly.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    title: "Pharmacy Director", 
    organization: "HealthFirst Pharmacy Chain",
    content: "The pharmacy management system is incredible. Real-time inventory tracking and automated drug interaction alerts have prevented countless medication errors.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Dr. Emily Watson",
    title: "Laboratory Director",
    organization: "Advanced Diagnostics Lab",
    content: "Sample tracking and automated result reporting have streamlined our operations. We've reduced turnaround time from 4 hours to under 30 minutes for critical tests.",
    rating: 5,
    avatar: "EW"
  },
  {
    name: "James Thompson",
    title: "CTO",
    organization: "Regional Medical Center",
    content: "The security and compliance features are outstanding. HIPAA compliance is built-in, and the multi-layer security gives us complete peace of mind.",
    rating: 5,
    avatar: "JT"
  },
  {
    name: "Dr. Lisa Park",
    title: "Practice Manager",
    organization: "Family Care Clinic",
    content: "Patient satisfaction has increased dramatically since implementing the patient portal. Appointment scheduling is now seamless and our no-show rate has dropped by 60%.",
    rating: 5,
    avatar: "LP"
  },
  {
    name: "Robert Kim",
    title: "IT Director",
    organization: "University Medical Center",
    content: "Integration with our existing systems was flawless. The API connectivity and data migration tools made the transition smooth with zero downtime.",
    rating: 5,
    avatar: "RK"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-4 font-semibold">Trusted by Healthcare Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what healthcare professionals are saying about SPIREHEALTH
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateY: 2,
                scale: 1.02
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="relative p-6 bg-card rounded-2xl border border-border shadow-lg overflow-hidden h-full"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote icon */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-4 h-4 text-primary" />
                </motion.div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 500 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4 text-primary-foreground font-medium"
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-sm text-primary">{testimonial.organization}</p>
                  </div>
                </div>

                {/* 3D shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-2xl transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Healthcare Facilities" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "2M+", label: "Patients Served" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}