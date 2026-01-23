import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ImageGallery } from "@/components/ImageGallery";
import {
  Film,
  ArrowRight,
  Heart,
  Users,
  Star,
  Popcorn,
  Calendar,
  MessageCircle,
  GraduationCap,
  Lightbulb,
  Target,
  BookOpen,
} from "lucide-react";

// Import gallery images
import movieDate1 from "@/assets/gallery/movie-date-1.jpg";
import movieDate2 from "@/assets/gallery/movie-date-2.jpg";
import movieDate3 from "@/assets/gallery/movie-date-3.jpg";
import movieDate4 from "@/assets/gallery/movie-date-4.jpg";
import movieDate5 from "@/assets/gallery/movie-date-5.jpg";
import movieDate6 from "@/assets/gallery/movie-date-6.jpg";

// Import edutainment gallery images
import edutainment1 from "@/assets/gallery/edutainment-1.jpg";
import edutainment2 from "@/assets/gallery/edutainment-2.jpg";
import edutainment3 from "@/assets/gallery/edutainment-3.jpg";
import edutainment4 from "@/assets/gallery/edutainment-4.jpg";
import edutainment5 from "@/assets/gallery/edutainment-5.jpg";
import edutainment6 from "@/assets/gallery/edutainment-6.jpg";

const features = [
  {
    icon: Popcorn,
    title: "Curated Screenings",
    description:
      "Hand-picked films from across genres, eras, and cultures for the ultimate viewing experience.",
  },
  {
    icon: Users,
    title: "Community Events",
    description:
      "Connect with fellow movie enthusiasts in a warm, welcoming atmosphere.",
  },
  {
    icon: MessageCircle,
    title: "Post-Movie Discussions",
    description:
      "Dive deep into film analysis and share perspectives after each screening.",
  },
  {
    icon: Heart,
    title: "Themed Experiences",
    description:
      "From romance nights to thriller marathons, there's something for everyone.",
  },
];

const upcomingEvents = [
  {
    title: "Classic Romance Night",
    date: "Coming Soon",
    genre: "Romance",
    description: "A celebration of timeless love stories on the silver screen",
  },
  {
    title: "African Cinema Showcase",
    date: "Coming Soon",
    genre: "Drama",
    description: "Highlighting brilliant filmmaking from across the continent",
  },
  {
    title: "Thriller Thursday",
    date: "Coming Soon",
    genre: "Thriller",
    description: "Edge-of-your-seat suspense guaranteed",
  },
];

const galleryImages = [
  {
    src: movieDate1,
    alt: "Cozy Movie Screening",
    caption: "Intimate Cinema Experience",
  },
  {
    src: movieDate2,
    alt: "Post-Movie Discussion",
    caption: "Film Discussion Circle",
  },
  {
    src: movieDate3,
    alt: "Outdoor Screening",
    caption: "Under the Stars Screening",
  },
  {
    src: movieDate4,
    alt: "Romantic Movie Night",
    caption: "Date Night Special",
  },
  {
    src: movieDate5,
    alt: "African Cinema",
    caption: "African Cinema Showcase",
  },
  { src: movieDate6, alt: "Popcorn Setup", caption: "Gourmet Popcorn Bar" },
];

const edutainmentFeatures = [
  {
    icon: GraduationCap,
    title: "School Partnerships",
    description:
      "Collaborating with schools to bring impactful film experiences to students.",
  },
  {
    icon: Lightbulb,
    title: "Life Lessons Through Film",
    description:
      "Using cinema to teach values, critical thinking, and emotional intelligence.",
  },
  {
    icon: Target,
    title: "Focused Curriculum",
    description:
      "Age-appropriate films selected to align with educational goals and student development.",
  },
  {
    icon: BookOpen,
    title: "Discussion & Reflection",
    description:
      "Guided conversations that help students process and apply what they've learned.",
  },
];

const edutainmentGalleryImages = [
  {
    src: edutainment1,
    alt: "Students Watching Educational Film",
    caption: "School Film Screening",
  },
  {
    src: edutainment2,
    alt: "Interactive Mentorship Session",
    caption: "Interactive Discussion",
  },
  {
    src: edutainment3,
    alt: "Post-Film Discussion Circle",
    caption: "Reflection Circle",
  },
  {
    src: edutainment4,
    alt: "Certificate Ceremony",
    caption: "Program Graduation",
  },
  {
    src: edutainment5,
    alt: "Mentor with Students",
    caption: "Collaborative Learning",
  },
  {
    src: edutainment6,
    alt: "Students Learning Film Production",
    caption: "Film-Making Workshop",
  },
];

export default function MovieDate() {
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
              <Film className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                Movie Date with Angel
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Cinema Reimagined,{" "}
              <span className="text-gradient-gold">Community Created</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              More than just watching movies — it's about sharing stories,
              building connections, and experiencing the magic of cinema
              together in a unique, intimate setting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Join the Experience
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

      {/* What Makes It Special */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              The Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Why{" "}
              <span className="text-gradient-gold">Movie Date with Angel?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              It's not just about the film on screen — it's about the
              conversations, the laughter, the shared moments that make
              movie-going truly special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gradient-card rounded-2xl border border-border/50 p-8 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movie Date Gallery */}
      <section id="gallery" className="bg-secondary/20">
        <ImageGallery
          images={galleryImages}
          title="Movie Night Moments"
          subtitle="Capturing the magic of our film screenings and the community we've built."
          variant="featured"
        />
      </section>

      {/* Edutainment Program Section */}
      <section id="edutainment" className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                Edutainment Program
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Shaping the Next Generation,{" "}
              <span className="text-gradient-gold">One Film at a Time</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A transformative mentorship program designed for schools, using the power 
              of cinema to inspire, educate, and shape young minds into thoughtful, 
              empathetic leaders of tomorrow.
            </p>
          </div>

          {/* Edutainment Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {edutainmentFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-gradient-card rounded-2xl border border-border/50 p-8 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Program Highlights */}
          <div className="bg-gradient-card rounded-3xl border border-border/50 p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-display font-bold text-gradient-gold mb-2">
                  10+
                </div>
                <p className="text-muted-foreground">Schools Reached</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-gradient-gold mb-2">
                  500+
                </div>
                <p className="text-muted-foreground">Students Impacted</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-gradient-gold mb-2">
                  20+
                </div>
                <p className="text-muted-foreground">Sessions Conducted</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Edutainment Gallery */}
      <section className="bg-secondary/20">
        <ImageGallery
          images={edutainmentGalleryImages}
          title="Edutainment in Action"
          subtitle="Capturing the transformative moments from our school mentorship programs."
          variant="grid"
        />
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Upcoming
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Next <span className="text-gradient-gold">Screenings</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't miss out on our upcoming movie events. Reserve your spot and
              be part of something special.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-gradient-card rounded-2xl border border-border/50 overflow-hidden card-hover"
              >
                <div className="h-48 bg-secondary/50 flex items-center justify-center">
                  <Film className="h-16 w-16 text-primary/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {event.genre}
                    </span>
                    <span className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <Button
                    variant="gold-outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">Reserve Spot</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Join Our Movie <span className="text-gradient-gold">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Be the first to know about upcoming screenings, special events, and
            exclusive movie night experiences.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="group">
              Get on the List
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
