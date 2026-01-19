import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Mic2, 
  ArrowRight, 
  CheckCircle2, 
  PartyPopper, 
  Building2, 
  Heart, 
  Presentation,
  Star
} from "lucide-react";

const eventTypes = [
  { icon: Building2, title: "Corporate Events", description: "Conferences, product launches, and annual galas" },
  { icon: Heart, title: "Weddings & Celebrations", description: "Making your special day truly unforgettable" },
  { icon: Presentation, title: "Conferences & Seminars", description: "Engaging audiences with dynamic hosting" },
  { icon: PartyPopper, title: "Private Parties", description: "Birthdays, anniversaries, and milestone celebrations" },
];

const benefits = [
  "Professional and polished delivery",
  "Excellent crowd engagement skills",
  "Seamless event flow management",
  "Adaptable to any event theme",
  "Bilingual capabilities",
  "Comprehensive pre-event coordination",
];

export default function MCServices() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
              <Mic2 className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">Professional MC Services</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Command the Stage,{" "}
              <span className="text-gradient-gold">Captivate the Crowd</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              With years of experience and an innate ability to connect with audiences, 
              I bring energy, professionalism, and that special touch that transforms 
              ordinary events into extraordinary experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Book for Your Event
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#event-types">View Event Types</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section id="event-types" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Event Types
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Every Occasion, <span className="text-gradient-gold">Expertly Hosted</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From intimate gatherings to grand celebrations, I adapt my style to match your event's unique atmosphere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <div
                key={event.title}
                className="bg-gradient-card rounded-2xl border border-border/50 p-8 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <event.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                Why Choose Me
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Your Event Deserves <span className="text-gradient-gold">the Best</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I don't just host events — I create experiences. With meticulous preparation, 
                genuine enthusiasm, and a commitment to excellence, every moment is crafted to perfection.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Let's Discuss Your Event
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-card border border-border/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Star className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-2xl font-display font-bold text-gradient-gold">500+</p>
                    <p className="text-muted-foreground">Events Hosted</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make Your Event <span className="text-gradient-gold">Unforgettable?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's create something extraordinary together. Get in touch to discuss your event and secure your date.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="group">
              Book Me Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
