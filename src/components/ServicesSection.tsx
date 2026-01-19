import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic2, GraduationCap, Film, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Mic2,
    title: "MC Services",
    description: "Transform your events into unforgettable experiences with professional hosting that captivates, entertains, and leaves lasting impressions.",
    features: ["Corporate Events", "Weddings & Celebrations", "Conferences & Seminars", "Product Launches"],
    path: "/mc-services",
    gradient: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: GraduationCap,
    title: "CX Training",
    description: "Empower your team with cutting-edge customer experience strategies that drive satisfaction, loyalty, and business growth.",
    features: ["Team Workshops", "Executive Coaching", "Online Courses", "Certification Programs"],
    path: "/cx-training",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Film,
    title: "Movie Date with Angel",
    description: "Experience cinema like never before with exclusive movie events, curated screenings, and unique entertainment experiences.",
    features: ["Private Screenings", "Themed Events", "Movie Reviews", "Community Gatherings"],
    path: "/movie-date",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            What I Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Services That{" "}
            <span className="text-gradient-gold">Transform</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From commanding stages to training champions and creating magical movie moments, 
            discover how I can elevate your next experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-gradient-card rounded-2xl border border-border/50 overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="gold-outline" className="w-full group/btn" asChild>
                  <Link to={service.path}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
