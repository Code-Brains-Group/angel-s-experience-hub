import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Star, Users, Calendar } from "lucide-react";
import angelPortrait from "@/assets/purity2.jpeg";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Hosted" },
  { icon: Users, value: "1000+", label: "Trainees" },
  { icon: Star, value: "5.0", label: "Average Rating" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-12 animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wide">
                Corporate MC | Customer Experience | Movie Enthusiast
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.1] mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm{" "}
              <span className="text-gradient-gold relative">
                Purity
                <span className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-gold-light rounded-full opacity-50" />
              </span>
            </h1>

            {/* Description */}
            <div
              className="space-y-4 text-lg text-muted-foreground/80 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <p>
                I create memorable experiences that connect, inspire, and leave
                a lasting impact.
              </p>

              <p>
                I am a <strong>Corporate MC</strong> and{" "}
                <strong>Customer Experience Trainer</strong> with over 8 years
                of hands on CX and leadership experience. I work with
                organizations to transform service teams, elevate customer
                interactions, and build customer centric cultures that stand out
                and endure.
              </p>

              <p>
                Beyond the corporate space, I host{" "}
                <strong>Movie Date with Angel</strong>, a curated monthly
                edutainment experience that uses film to spark dialogue,
                learning, and meaningful connection. I am also the founder of
                <strong> Apparel by Neila</strong>, a trench coat brand created
                for elegant self expression and confidence.
              </p>

              <p>
                Whether on stage, in a training room, or behind the scenes, I
                bring presence, creativity, and professionalism to every
                experience.
              </p>

              <p className="text-xl font-medium text-primary/90">
                Let’s elevate your experience.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="hero"
                size="xl"
                asChild
                className="px-10 h-14 text-lg"
              >
                <Link to="/contact" className="group">
                  Book Me Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                asChild
                className="px-10 h-14 text-lg"
              >
                <Link to="/cx-training" className="group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Intro
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-20 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-card text-center py-8">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div
            className="order-1 lg:order-2 flex justify-center animate-fade-in-right lg:pt-0"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative group">
              {/* Image Container */}
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                <img
                  src={angelPortrait}
                  alt="Angel - Professional MC and CX Trainer"
                  className="w-full h-[720px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
