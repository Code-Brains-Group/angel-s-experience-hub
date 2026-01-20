import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ImageGallery } from "@/components/ImageGallery";
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Play,
  Users,
  Target,
  Award,
  BookOpen,
  TrendingUp,
} from "lucide-react";

// Import gallery images
import cxTraining1 from "@/assets/gallery/cx-training-1.jpg";
import cxTraining2 from "@/assets/gallery/cx-training-2.jpg";
import cxTraining3 from "@/assets/gallery/cx-training-3.jpg";
import cxTraining4 from "@/assets/gallery/cx-training-4.jpg";
import cxTraining5 from "@/assets/gallery/cx-training-5.jpg";
import cxTraining6 from "@/assets/gallery/cx-training-6.jpg";

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
  { icon: Target, stat: "50+", label: "Organizations transformed" },
];

const galleryImages = [
  {
    src: cxTraining1,
    alt: "Corporate Training Session",
    caption: "Executive Training Workshop",
  },
  {
    src: cxTraining2,
    alt: "Team Building Workshop",
    caption: "Interactive Team Building",
  },
  {
    src: cxTraining3,
    alt: "Seminar Presentation",
    caption: "Professional Development Seminar",
  },
  {
    src: cxTraining4,
    alt: "Group Discussion",
    caption: "Collaborative Problem Solving",
  },
  {
    src: cxTraining5,
    alt: "Graduation Ceremony",
    caption: "CX Champions Graduation",
  },
  {
    src: cxTraining6,
    alt: "Role Play Exercise",
    caption: "Customer Service Role Play",
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
              Empower your organization with cutting-edge customer experience
              strategies that drive satisfaction, loyalty, and measurable
              business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
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

      {/* Training Gallery */}
      <section className="bg-secondary/20">
        <ImageGallery
          images={galleryImages}
          title="Training Sessions"
          subtitle="A look at our engaging training workshops and the professionals we've empowered."
          variant="grid"
        />
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
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 card-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {module.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {module.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-gradient-card rounded-3xl border border-border/50 p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Ready to Transform Your Team?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Invest in your team's CX capabilities and watch your customer
                  satisfaction soar.
                </p>
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Enroll Your Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Corporate packages available
                </p>
              </div>
            </div>
          </div>
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
