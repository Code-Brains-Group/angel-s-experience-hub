import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Star, Users, Calendar } from "lucide-react";
import angelPortrait from "@/assets/angel.jpg";

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 animate-fade-in">
              <span className="text-primary text-sm font-medium">
                Corporate MC | Customer Experience | Movie Enthusiast
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm{" "}
              <span className="text-gradient-gold relative">
                Purity
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-gold-light rounded-full opacity-50" />
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Creating Memorable Experiences
            </p>

            {/* Description */}
            <p
              className="text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Corporate MC, CX Trainer, and Movie Enthusiast driven by purpose,
              creativity, and meaningful impact. With 8+ years of managerial
              experience, I transform service teams through trainings that
              elevate customer interactions and build lasting impressions.
              Beyond corporate work, I host Movie Date with Angel—monthly movie
              events exploring reviews, actors, and narratives that educate and
              inspire. I also founder Apparel by Neila, a trench coat brand for
              elegant self-expression. On stage, I bring energy and
              professionalism to every event. Ready to elevate your experiences.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Book Me Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/cx-training" className="group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Intro
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 mt-16 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-card text-center">
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div
            className="order-1 lg:order-2 flex justify-center animate-fade-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Animated rings */}
              <div
                className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute inset-4 rounded-full border border-primary/10 animate-ping"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              />

              {/* Photo frame */}
              <div className="photo-frame animate-glow">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-secondary">
                  <img
                    src={angelPortrait}
                    alt="Angel - Professional MC and CX Trainer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
              <div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-float"
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
