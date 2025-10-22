import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop"
                alt="Engineering team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-sm text-primary font-medium">About us</p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Your Trusted Innovation Partner
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Prodisyn Innovations is a technology-driven Product Engineering Services 
                company specializing in IoT, Edge AI, Networking, Automotive and Medical.
              </p>
              <p>
                We bring together experienced engineers, domain experts and researchers 
                passionate about solving real-world problems through cutting-edge technologies. 
                Our core strength lies in providing integrated design services covering hardware 
                and software to build smart, reliable, and future-ready products.
              </p>
            </div>
            <button className="text-primary text-sm font-medium hover:opacity-80 transition-opacity">
              Read More →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
