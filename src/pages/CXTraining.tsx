import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  ArrowRight,
  Play,
  Users,
  Target,
  Award,
  BookOpen,
  TrendingUp,
  Check,
  Star,
  Zap,
} from "lucide-react";

// Import original gallery images
import cx1 from "@/assets/gallery/cx/cx1.jpeg";
import cx2 from "@/assets/gallery/cx/cx2.jpeg";
import cx3 from "@/assets/gallery/cx/cx3.jpeg";
import cx4 from "@/assets/gallery/cx/cx4.jpeg";
import cx5 from "@/assets/gallery/cx/cx5.jpeg";
import cx6 from "@/assets/gallery/cx/cx6.jpeg";

// Import new gallery images
import cx001 from "@/assets/gallery/cx/cx001.jpeg";
import cx002 from "@/assets/gallery/cx/cx002.jpeg";
import cx003 from "@/assets/gallery/cx/cx003.jpeg";
import cx004 from "@/assets/gallery/cx/cx004.jpeg";
import cx005 from "@/assets/gallery/cx/cx005.jpeg";
import cx006 from "@/assets/gallery/cx/cx006.jpeg";
import cx007 from "@/assets/gallery/cx/cx007.jpeg";
import cx008 from "@/assets/gallery/cx/cx008.jpeg";

const allCxImages = [
  cx1, cx2, cx3, cx4, cx5, cx6,
  cx001, cx002, cx003, cx004, cx005, cx006, cx007, cx008
];

const modules = [
  {
    title: "Customer Psychology",
    description: "Understanding customer needs and expectations",
  },
  {
    title: "Communication Excellence",
    description: "Mastering verbal and non-verbal communication",
  },
  {
    title: "Problem Resolution",
    description: "Turning complaints into opportunities",
  },
  {
    title: "Service Recovery",
    description: "Strategies for exceptional recovery",
  },
  {
    title: "Building Loyalty",
    description: "Creating long-term customer relationships",
  },
  {
    title: "Metrics & Measurement",
    description: "Tracking and improving CX performance",
  },
];

const outcomes = [
  { icon: TrendingUp, stat: "40%", label: "Improvement in CSAT scores" },
  { icon: Users, stat: "1000+", label: "Professionals trained" },
  { icon: Award, stat: "98%", label: "Course completion rate" },
  { icon: Target, stat: "10+", label: "Businesses transformed" },
];

const pricingPackages = [
  {
    name: "Starter",
    price: "15,000",
    description: "Perfect for individuals looking to boost their CX skills",
    icon: BookOpen,
    features: [
      "6 Core Training Modules",
      "Digital Course Materials",
      "1-Month Access",
      "Certificate of Completion",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "35,000",
    description: "Ideal for teams seeking comprehensive CX transformation",
    icon: Star,
    features: [
      "All Starter Features",
      "Live Virtual Sessions",
      "3-Month Access",
      "Role-Play Workshops",
      "1-on-1 Coaching Session",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "85,000",
    description:
      "Complete solution for organizations serious about CX excellence",
    icon: Zap,
    features: [
      "All Professional Features",
      "On-Site Training Option",
      "Lifetime Access",
      "Custom Curriculum",
      "Team of up to 10",
      "Quarterly Check-ins",
      "Dedicated Account Manager",
    ],
    popular: false,
  },
];



export default function CXTraining() {
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
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                CX Training & Development
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Transform Your Team Into{" "}
              <span className="text-gradient-gold">CX Champions</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Equip your teams with modern customer experience skills that
              improve service delivery, deepen customer loyalty, and create
              measurable business impact.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-3xl mx-auto mb-10">
              <span className="text-foreground text-sm font-medium">
                <span className="text-primary mr-1">•</span>Team Workshops
              </span>
              <span className="text-foreground text-sm font-medium">
                <span className="text-primary mr-1">•</span>Executive Coaching
              </span>
              <span className="text-foreground text-sm font-medium">
                <span className="text-primary mr-1">•</span>Online Learning
              </span>
              <span className="text-foreground text-sm font-medium">
                <span className="text-primary mr-1">•</span>CX Masterclasses
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="#packages" className="group">
                  View Packages
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#intro-video" className="group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Introduction
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="intro-video" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Course Preview
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              See What You'll <span className="text-gradient-gold">Learn</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl bg-gradient-card border border-border/50 overflow-hidden relative group">
              {/* Placeholder for video - will be replaced with actual embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors cursor-pointer">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground">
                    Watch 1-minute introduction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome) => (
              <div key={outcome.label} className="stat-card text-center">
                <outcome.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gradient-gold mb-1">
                  {outcome.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Training Gallery - New Component */}
      <section className="py-32 relative overflow-hidden bg-secondary/10">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Training in Action
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Experience the <span className="text-gradient-gold">Transformation</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive showcase of our high-impact training sessions where executive strategy meets real-world excellence.
            </p>
          </div>

          {/* Picture Listing for CX Training (Curated Masonry) */}
          <div className="max-w-6xl mx-auto">
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              
              {/* PRIMARY SPOTLIGHT */}
              <div className="break-inside-avoid relative group shadow-2xl rounded-[2.5rem] overflow-hidden border border-primary/30">
                <img
                  src={cx1}
                  alt="Executive Strategy"
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                  Executive Training
                </div>
              </div>

              {/* DYNAMIC COMBINATION 1 */}
              <div className="break-inside-avoid space-y-6">
                <div className="columns-2 gap-4 space-y-4">
                  <img src={cx2} alt="Workshop" className="w-full h-auto rounded-3xl border border-white/10" />
                  <img src={cx3} alt="Team Building" className="w-full h-auto rounded-3xl border border-white/10" />
                </div>
                <div className="group relative rounded-[2rem] overflow-hidden border border-white/10 shadow-xl">
                  <img src={cx001} alt="Collaborative Session" className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              </div>

              {/* ACTION FOCUS */}
              <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden border border-primary/20 shadow-xl">
                <img src={cx4} alt="Strategic Planning" className="w-full h-auto block transition-all duration-[2s] group-hover:scale-105" />
                <div className="absolute bottom-6 right-6 px-5 py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 max-w-[200px]">
                  <p className="text-white text-xs font-medium leading-relaxed italic">
                    "Driving cultural shifts through actionable strategy."
                  </p>
                </div>
              </div>

              {/* GRID MOSAIC */}
              <div className="break-inside-avoid space-y-6">
                <div className="columns-2 gap-4 space-y-4">
                  <img src={cx002} alt="Focus 1" className="w-full h-auto rounded-3xl border border-white/10" />
                  <img src={cx003} alt="Focus 2" className="w-full h-auto rounded-3xl border border-white/10" />
                  <img src={cx004} alt="Focus 3" className="w-full h-auto rounded-3xl border border-white/10" />
                  <img src={cx5} alt="Focus 4" className="w-full h-auto rounded-3xl border border-white/10" />
                </div>
              </div>

              {/* THE MASTERPIECE QUARTET */}
              <div className="break-inside-avoid group relative rounded-[2.5rem] bg-secondary/5 border border-white/10 p-3 shadow-lg">
                <div className="grid grid-cols-2 gap-3">
                  <img src={cx005} alt="Highlight 1" className="w-full h-auto rounded-2xl" />
                  <img src={cx006} alt="Highlight 2" className="w-full h-auto rounded-2xl" />
                  <img src={cx007} alt="Highlight 3" className="w-full h-auto rounded-2xl" />
                  <img src={cx008} alt="Highlight 4" className="w-full h-auto rounded-2xl" />
                </div>
                <div className="p-6 text-center">
                  <p className="text-foreground font-display text-lg font-bold mb-1">
                    Excellence In Motion
                  </p>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">
                    Interactive Workshops
                  </p>
                </div>
              </div>

              {/* THE CLOSING MOMENT */}
              <div className="break-inside-avoid relative md:pt-12">
                <div className="group relative rounded-[3rem] overflow-hidden border-2 border-primary shadow-[0_0_50px_-15px_rgba(var(--primary-rgb),0.4)]">
                  <img
                    src={cx6}
                    alt="Success & Graduation"
                    className="w-full h-auto block transition-transform duration-[3s] group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-primary font-display font-bold text-2xl drop-shadow-md">
                      Celebrate Success
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                Curriculum
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Comprehensive{" "}
                <span className="text-gradient-gold">Training Modules</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our carefully designed curriculum covers every aspect of
                customer experience, from understanding customer psychology to
                implementing world-class service strategies.
              </p>

              <div className="space-y-4">
                {modules.map((module, index) => (
                  <div
                    key={module.title}
                    className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 card-hover transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1 text-lg">
                        {module.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-gradient-to-br from-primary/15 to-transparent rounded-3xl border border-primary/30 p-8 text-center shadow-xl shadow-primary/10">
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Ready to Transform Your Team?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Invest in your team's CX capabilities and watch your customer
                  satisfaction soar.
                </p>
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    Enroll Your Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-5 font-medium">
                  Corporate packages available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-24 bg-card/50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Investment
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Choose Your <span className="text-gradient-gold">Package</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible pricing options designed to fit your needs and budget.
              All packages include our proven CX training methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${pkg.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-primary/50 shadow-2xl shadow-primary/20"
                  : "bg-gradient-card border-border/50 hover:border-primary/30"
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/30">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${pkg.popular
                      ? "bg-gradient-to-br from-primary/40 to-primary/20 shadow-lg shadow-primary/20"
                      : "bg-primary/10"
                      }`}
                  >
                    <pkg.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-sm text-muted-foreground font-medium">
                      KSH
                    </span>
                    <span className="text-4xl font-bold text-gradient-gold">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "gold" : "gold-outline"}
                  className="w-full font-semibold"
                  asChild
                >
                  <a
                    href="https://paystack.shop/pay/lexblitz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            All prices are in Kenyan Shillings (KSH). Custom corporate packages
            available upon request.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Elevate Your Customer{" "}
            <span className="text-gradient-gold">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join hundreds of organizations that have transformed their customer
            experience with our training.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
