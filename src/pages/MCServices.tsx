import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ImageGallery } from "@/components/ImageGallery";
import {
  Mic2,
  ArrowRight,
  CheckCircle2,
  PartyPopper,
  Building2,
  Heart,
  Presentation,
  Users,
  Star,
} from "lucide-react";

// Import gallery images
import mc1 from "@/assets/gallery/mc/mc1.jpeg";
import mc2 from "@/assets/gallery/mc/mc2.jpeg";
import mc3 from "@/assets/gallery/mc/mc3.jpeg";
import mc4 from "@/assets/gallery/mc/mc4.jpeg";
import mc5 from "@/assets/gallery/mc/mc5.jpeg";
import mc6 from "@/assets/gallery/mc/mc6.jpeg";
import mc7 from "@/assets/gallery/mc/mc7.jpeg";
import mc8 from "@/assets/gallery/mc/mc8.jpeg";
import mc9 from "@/assets/gallery/mc/mc9.jpeg";
import mc10 from "@/assets/gallery/mc/mc10.jpeg";
import mc11 from "@/assets/gallery/mc/mc11.jpeg";
import mc12 from "@/assets/gallery/mc/mc12.jpeg";

const eventTypes = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Conferences, gala dinners, and executive gatherings",
  },
  {
    icon: Heart,
    title: "Weddings and Celebrations",
    description:
      "Making your special day smooth, engaging, and truly memorable",
  },
  {
    icon: Presentation,
    title: "Conferences and Seminars",
    description: "Engaging audiences with dynamic hosting and flow management",
  },
  {
    icon: Star,
    title: "Product Launches",
    description: "Creating excitement and maintaining momentum for your brand",
  },
];

const benefits = [
  "Polished and professional delivery",
  "Engaging and interactive hosting",
  "Smooth, flawless event management",
  "Tailored to any theme or audience",
  "End-to-end pre-event coordination",
];

const galleryImages = [
  { src: mc1, alt: "Corporate MC Angel", caption: "Professional Hosting" },
  { src: mc2, alt: "MC Angel at Event", caption: "Engaging the Audience" },
  { src: mc3, alt: "Stage Presence", caption: "Commanding the Stage" },
  { src: mc4, alt: "Event Hosting", caption: "Seamless Coordination" },
  { src: mc5, alt: "Professional MC", caption: "Vibrant Hosting" },
  { src: mc6, alt: "Live Event", caption: "Memorable Moments" },
  { src: mc7, alt: "Angel Hosting", caption: "Elegant Presence" },
  { src: mc8, alt: "MC Services", caption: "Dynamic Flow" },
  { src: mc9, alt: "Corporate Event", caption: "Polished Delivery" },
  { src: mc10, alt: "Special Occasion", caption: "Making it Special" },
  { src: mc11, alt: "Celebration Hosting", caption: "Celebratory Atmosphere" },
  { src: mc12, alt: "Grand Opening", caption: "Grand Opening Event" },
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
              <span className="text-primary text-sm font-medium">
                Professional MC Services
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Command the Stage,{" "}
              <span className="text-gradient-gold">Captivate the Crowd</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto italic">
              Transform your events into memorable experiences through
              professional hosting that engages audiences, maintains flow, and
              leaves a lasting impression.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Book for Your Event
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#gallery">View Gallery</a>
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
              Every Occasion,{" "}
              <span className="text-gradient-gold">Expertly Hosted</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From intimate gatherings to grand celebrations, I adapt my style
              to match your event's unique atmosphere.
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
                <h3 className="font-display text-xl font-semibold mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterclass Portfolio - Signature Showcase (No-Crop) */}
      <section
        id="gallery"
        className="py-32 relative overflow-hidden bg-[#0A0C10]"
      >
        {/* Cinematic Backdrop */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary/50" />
              <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
                Signature Moments
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              The Art of <br />
              <span className="text-gradient-gold italic">Commanding</span>{" "}
              Attention
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-xl border-l border-primary/30 pl-8 ml-2">
              A curated visual narrative of excellence across 12 signature
              events. No filters, no crops—just raw, professional impact.
            </p>
          </div>

          <div className="columns-1 md:columns-2 gap-12 space-y-12">
            {/* 1. THE HERO MOMENT (Top Left) */}
            <div className="break-inside-avoid relative group">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-secondary/10 hover:shadow-[0_0_80px_-15px_rgba(var(--primary-rgb),0.3)] transition-all duration-700">
                <img
                  src={mc1}
                  alt="Commanding the Stage"
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8 flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/20 backdrop-blur-2xl border border-white/10 text-primary text-xs font-bold uppercase tracking-widest shadow-2xl">
                  <Star className="w-4 h-4 fill-primary" />
                  Golden Moment
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <p className="text-primary font-display text-2xl font-bold mb-2">
                    Stage Presence
                  </p>
                  <p className="text-gray-300 text-sm italic">
                    "The room is yours the moment you step into the light."
                  </p>
                </div>
              </div>
            </div>

            {/* 2. THE DUO INTRO */}
            <div className="break-inside-avoid space-y-8 md:pt-24">
              <div className="group relative">
                <img
                  src={mc3}
                  alt="Prep"
                  className="w-full h-auto rounded-[2rem] border border-white/5 transition-all duration-700"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary px-6 py-3 rounded-2xl shadow-2xl font-display font-bold text-black rotate-3 group-hover:rotate-0 transition-transform">
                  ELITE START
                </div>
              </div>
              <div className="group relative">
                <img
                  src={mc2}
                  alt="Crowd"
                  className="w-full h-auto rounded-[2rem] border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-6 left-6 p-3 rounded-full bg-white/10 backdrop-blur-md">
                  <Users className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* 3. THE CENTER SPREAD (Middle Wide logic) */}
            <div className="break-inside-avoid group relative overflow-hidden rounded-[2rem] border border-primary/20 transition-all duration-500 hover:scale-[1.01]">
              <img
                src={mc5}
                alt="Vibrant Energy"
                className="w-full h-auto block"
              />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-24 bg-primary" />
              <div className="absolute right-8 bottom-8 p-6 rounded-3xl bg-black/60 backdrop-blur-lg border border-primary/30 max-w-[200px]">
                <span className="text-[10px] text-primary font-bold uppercase block mb-1">
                  Energy Factor
                </span>
                <p className="text-white text-xs leading-relaxed">
                  Infusing every stage with a pulse of enthusiasm.
                </p>
              </div>
            </div>

            {/* 4. THE ACTION TRIPTYCH (Simulated using columns) */}
            <div className="break-inside-avoid space-y-6">
              <div className="columns-2 gap-4 space-y-4">
                <img
                  src={mc4}
                  alt="Flow"
                  className="w-full h-auto rounded-3xl border border-white/5"
                />
                <img
                  src={mc6}
                  alt="Flow"
                  className="w-full h-auto rounded-3xl border border-white/5"
                />
              </div>
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
                <img
                  src={mc7}
                  alt="Sync"
                  className="w-full h-auto block transition-all duration-700"
                />
              </div>
            </div>

            {/* 5. THE VERSATILITY BLADE */}
            <div className="break-inside-avoid group relative overflow-hidden rounded-[2.5rem] bg-secondary/5 border border-white/5">
              <div className="grid grid-cols-2 p-3 gap-3">
                <img
                  src={mc8}
                  alt="Detail 1"
                  className="w-full h-auto rounded-2xl"
                />
                <img
                  src={mc9}
                  alt="Detail 2"
                  className="w-full h-auto rounded-2xl"
                />
                <img
                  src={mc10}
                  alt="Detail 3"
                  className="w-full h-auto rounded-2xl"
                />
                <img
                  src={mc11}
                  alt="Detail 4"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="p-8 border-t border-white/5">
                <h4 className="font-display text-xl text-white font-bold mb-2">
                  Corporate Versatility
                </h4>
                <p className="text-sm text-gray-400 font-light">
                  From tech launches to high-society galas, the standard remains
                  identical.
                </p>
              </div>
            </div>

            {/* 6. THE GRAND FINALE */}
            <div className="break-inside-avoid relative md:pt-20">
              <div className="group relative rounded-[3rem] overflow-hidden border-2 border-primary shadow-[0_0_60px_-20px_rgba(var(--primary-rgb),0.5)]">
                <img
                  src={mc12}
                  alt="Legendary Finale"
                  className="w-full h-auto block transition-transform duration-[2s] group-hover:scale-110"
                />
                {/* <div className="absolute inset-x-8 bottom-8 p-10 rounded-[2rem] bg-gradient-to-br from-black/90 to-background/50 backdrop-blur-xl border border-white/10 text-center">
                  <Mic2 className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-3xl font-bold text-white mb-4">Legendary Status</h3>
                  <p className="text-gray-300 text-sm mb-8 italic">Let's craft the perfect narrative for your audience.</p>
                  <Button variant="gold" size="lg" className="w-full py-8 text-lg font-bold uppercase tracking-widest" asChild>
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                Why Choose Me
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Turning Events into{" "}
                <span className="text-gradient-gold">
                  Memorable Experiences
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every event is unique, and I ensure it’s executed with
                precision, energy, and style. From planning to the final moment,
                I focus on creating experiences that your guests will remember.
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
                    <p className="text-2xl font-display font-bold text-gradient-gold">
                      500+
                    </p>
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
            Ready to Make Your Event{" "}
            <span className="text-gradient-gold">memorable?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to create something extraordinary? Get in touch to discuss
            your event and secure your date.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="group">
              Let's make your next event remarkable
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
