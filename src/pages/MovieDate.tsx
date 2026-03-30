import { useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ImageGallery } from "@/components/ImageGallery";
import { useToast } from "@/hooks/use-toast";
import { submitToWeb3Forms } from "@/lib/web3forms";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
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
  CheckCircle2,
  Play
} from "lucide-react";

// Import video
import edutainmentVideo from "@/assets/videos/edutainment.mp4";

// Import gallery images
import movieDate1 from "@/assets/gallery/movie/main_movie/mv1.jpeg";
import movieDate2 from "@/assets/gallery/movie/main_movie/mv2.jpeg";
import movieDate3 from "@/assets/gallery/movie/main_movie/mv3.jpeg";
import movieDate4 from "@/assets/gallery/movie/main_movie/mv4.jpeg";
import movieDate5 from "@/assets/gallery/movie/main_movie/mv5.jpeg";
import movieDate6 from "@/assets/gallery/movie/main_movie/mv6.jpeg";
import movieDate7 from "@/assets/gallery/movie/main_movie/mv7.jpeg";
import movieDate8 from "@/assets/gallery/movie/main_movie/mv8.jpeg";

// Import edutainment gallery images
import edutainment1 from "@/assets/gallery/movie/edu/edu3.jpeg";
import edutainment2 from "@/assets/gallery/movie/edu/edu2.jpeg";
import edutainment3 from "@/assets/gallery/movie/edu/edu3.jpeg";
import edutainment4 from "@/assets/gallery/movie/edu/edu4.jpeg";
import edutainment5 from "@/assets/gallery/movie/edu/edu5.jpeg";
import edutainment6 from "@/assets/gallery/movie/edu/edu6.jpeg";

const galleryImages = [
  {
    src: movieDate1,
    alt: "Outdoor Movie Night Experience",
    caption: "Magic under the stars",
  },
  {
    src: movieDate2,
    alt: "Community Gathering",
    caption: "A night of connection",
  },
  {
    src: movieDate3,
    alt: "Happy Audience",
    caption: "Smiles all around",
  },
  {
    src: movieDate4,
    alt: "Film Screening Setup",
    caption: "Cinematic Atmosphere",
  },
  {
    src: movieDate5,
    alt: "Evening Atmosphere",
    caption: "Pure Joy",
  },
  {
    src: movieDate6,
    alt: "Community Connection",
    caption: "Building Bonds",
  },
  {
    src: movieDate7,
    alt: "Event Details",
    caption: "The Experience Hub",
  },
  {
    src: movieDate8,
    alt: "Curated Screenings",
    caption: "Quality Content",
  },
];

const edutainmentGalleryImages = [
  {
    src: edutainment1,
    alt: "Film Education in Schools",
    caption: "Engaged Learning",
  },
  {
    src: edutainment2,
    alt: "Interactive Discussion",
    caption: "Sharing Perspectives",
  },
  {
    src: edutainment3,
    alt: "Student Workshop",
    caption: "Hands-on Experience",
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const { status, data } = await submitToWeb3Forms(formData);

      if (status === 200) {
        toast({
          title: "Inquiry Sent!",
          description: "Thank you for your interest. Angel will get back to you soon.",
        });
        setIsSubmitted(true);
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Small delay to reset success state after dialog closes
      setTimeout(() => setIsSubmitted(false), 300);
    }
  };

  return (
    <MainLayout>
      {/* Global Success Indicator (Top Right) */}
      {isSubmitted && (
        <div className="fixed top-24 right-6 z-[100] animate-in slide-in-from-right duration-500">
          <div className="flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-full font-bold shadow-[0_0_30px_rgba(34,197,94,0.5)] border border-white/20">
            <CheckCircle2 className="w-5 h-5 animate-pulse" />
            <span>Success! Request Received</span>
          </div>
        </div>
      )}

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

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto italic">
              Experience cinema like never before through curated movie events
              that blend entertainment, education, and meaningful connection.
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
              interactions, the discussions, and the shared moments that happen
              around it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Popcorn className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">
                Curated Selection
              </h3>
              <p className="text-muted-foreground">
                We select films that spark conversation, inspire thought, and
                provide genuine entertainment value.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">
                Social Connection
              </h3>
              <p className="text-muted-foreground">
                Our events are designed to bring people together, fostering new
                friendships and strengthening community ties.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">
                Memorable Vibes
              </h3>
              <p className="text-muted-foreground">
                From cozy indoor settings to magical outdoor screenings, we
                create the perfect atmosphere for every film.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                The Edutainment Program
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                Where Education Meets <br />
                <span className="text-gradient-gold">Entertainment</span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Creative Learning</h4>
                    <p className="text-muted-foreground italic">
                      "Unlocking potential through visual storytelling."
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Purposeful Impact</h4>
                    <p className="text-muted-foreground italic">
                      "Measuring success through empowered minds."
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Beyond the Screen</h4>
                    <p className="text-muted-foreground italic">
                      "Carrying the message from cinema into real-world action."
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-2 mb-8 p-4 bg-secondary/50 rounded-xl">
                  <span className="text-lg">📩</span>
                  <span className="text-muted-foreground">Email:</span>
                  <a
                    href="mailto:moviedatewithangel@gmail.com"
                    className="text-primary font-medium hover:underline"
                  >
                    moviedatewithangel@gmail.com
                  </a>
                </div>

                {/* Stats */}
                <div className="flex gap-8 mb-8">
                  <div>
                    <div className="text-3xl font-display font-bold text-gradient-gold">
                      10+
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Schools Reached
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-gradient-gold">
                      500+
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Students Impacted
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-gradient-gold">
                      10+
                    </div>
                    <p className="text-sm text-muted-foreground">Sessions</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-12">
                  <Dialog open={open} onOpenChange={handleOpenChange}>
                    <DialogTrigger asChild>
                      <Button variant="hero" size="lg" className="group">
                        Partner With Us
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] bg-gradient-card border-border/50 overflow-hidden">
                      <DialogHeader>
                        <DialogTitle className="font-display text-2xl font-bold">
                          {isSubmitted ? "Thank You!" : "Partner With Us"}
                        </DialogTitle>
                        <DialogDescription>
                          {isSubmitted 
                            ? "Success! We've received your partnership request."
                            : "Fill out the form below to discuss a partnership or booking."}
                        </DialogDescription>
                      </DialogHeader>

                      {isSubmitted ? (
                        <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                          </div>
                          <p className="text-xl font-display font-medium text-foreground">
                            I have received your request and will get back to you shortly.
                          </p>
                          <Button 
                            variant="outline" 
                            onClick={() => setOpen(false)}
                            className="mt-4 rounded-full"
                          >
                            Close Window
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4 py-4">
                          <input type="hidden" name="subject" value="Edutainment Program Partnership Inquiry" />
                          <div className="space-y-2">
                            <Label htmlFor="partner-name" className="text-foreground">Full Name</Label>
                            <Input id="partner-name" name="name" placeholder="Your name" required className="bg-background/50 border-border/50" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="partner-email" className="text-foreground">Email Address</Label>
                            <Input id="partner-email" name="email" type="email" placeholder="you@example.com" required className="bg-background/50 border-border/50" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="partner-org" className="text-foreground">School/Organization</Label>
                            <Input id="partner-org" name="organization" placeholder="Name of your organization" className="bg-background/50 border-border/50" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="partner-message" className="text-foreground">Message</Label>
                            <Textarea id="partner-message" name="message" placeholder="Tell us how you'd like to collaborate..." required className="bg-background/50 border-border/50 resize-none" rows={4} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="document_file" className="text-foreground">Relevant Document (Optional)</Label>
                            <Input id="document_file" name="document_file" type="file" className="cursor-pointer bg-background/50 border-border/50" />
                            <p className="text-[10px] text-muted-foreground italic">Accepted: PDF, DOCX, Images (Max 5MB)</p>
                          </div>
                          <DialogFooter className="pt-4">
                            <Button type="submit" variant="gold" className="w-full h-12 text-base" disabled={isSubmitting}>
                              {isSubmitting ? "Sending..." : "Send Inquiry"}
                            </Button>
                          </DialogFooter>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>

                  <Button 
                    variant="hero-outline" 
                    size="lg" 
                    className="group relative overflow-hidden"
                    onClick={() => setVideoOpen(true)}
                  >
                    <span className="relative z-10 flex items-center">
                      Watch Intro
                      <Play className="ml-2 h-4 w-4 fill-current transition-transform group-hover:scale-125" />
                    </span>
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Side - Staggered Bento Grid */}
            <div className="relative mt-12 lg:mt-0">
              {/* Animated background glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-secondary/30 rounded-full blur-[80px] animate-pulse delay-700" />
              <div className="relative grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
                {/* Featured Video - Now Spans 2 Columns for Maximum Impact */}
                <div className="col-span-2 mb-8">
                  <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                    <DialogTrigger asChild>
                      <div className="w-full h-[350px] sm:h-[450px] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.4)] border-2 border-primary/30 relative group card-hover cursor-pointer bg-black">
                        <video
                          src={edutainmentVideo}
                          muted
                          autoPlay
                          loop
                          playsInline
                          className="w-full h-full object-cover opacity-70 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-90"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                          <div className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-xl border-2 border-white/30 flex items-center justify-center mb-6 transition-all duration-700 group-hover:scale-110 group-hover:bg-primary/40 group-hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)]">
                            <Play className="w-10 h-10 text-white fill-white animate-pulse" />
                          </div>
                          <h4 className="text-white font-display text-3xl font-bold mb-2 drop-shadow-2xl">The Edutainment Experience</h4>
                          <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm">Experience the Vision</span>
                        </div>
                        
                        {/* Interactive UI elements on the video tile */}
                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           <div className="flex gap-1">
                              {[1,2,3].map(i => <div key={i} className="h-1 w-8 bg-white/40 rounded-full" />)}
                           </div>
                           <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] text-white font-bold uppercase tracking-widest">
                             Pre-Launch Intro
                           </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[1200px] p-0 bg-black border-none overflow-hidden rounded-[2.5rem] shadow-[0_0_100px_rgba(var(--primary-rgb),0.4)]">
                      <div className="relative aspect-video w-full group/video">
                        <video
                          src={edutainmentVideo}
                          controls
                          autoPlay
                          className="w-full h-full"
                        />
                        <div className="absolute top-6 left-6 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 opacity-0 group-hover/video:opacity-100 transition-opacity">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-white text-sm font-bold tracking-tight">Edutainment: The Mission</span>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Left Column (Shifted up slightly) - Rest of the images */}
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="w-full h-[220px] sm:h-[260px] rounded-[2rem] overflow-hidden shadow-2xl border border-primary/20 relative group card-hover">
                    <img
                      src={edutainment4}
                      alt="Program Graduation"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Right Column (Shifted down slightly) */}
                <div className="flex flex-col gap-4 sm:gap-6 pt-8 sm:pt-12">
                  <div className="w-full h-[220px] sm:h-[260px] rounded-[2rem] overflow-hidden shadow-xl border border-primary/20 relative group card-hover">
                    <img
                      src={edutainment2}
                      alt="Interactive Discussion"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Gallery
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Moments <span className="text-gradient-gold">Captured</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A visual journey through our movie nights and edutainment
              sessions.
            </p>
          </div>

          {/* Movie Night Moments - Creative Staggered Portfolio */}
          <div className="mb-32 relative">
            <div className="flex flex-col items-center gap-4 mb-16 text-center">
              <div className="w-20 h-20 rounded-[2.5rem] bg-primary/10 border border-primary/20 flex items-center justify-center glow-gold relative z-10 transition-transform duration-500 hover:scale-110">
                <Film className="h-10 w-10 text-primary animate-pulse" />
              </div>
              <div className="relative">
                <h3 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                  Movie Night <span className="text-gradient-gold italic">Moments</span>
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic font-medium border-l-2 border-primary/30 pl-6">
                  "Capturing the raw magic, emotion, and community of our signature film screenings."
                </p>
              </div>
            </div>

            {/* Creative Staggered Grid Layout (No Titles) */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "break-inside-avoid relative group overflow-hidden rounded-[2.5rem] border border-primary/10 bg-secondary/5 transition-all duration-700 hover:shadow-[0_0_50px_-15px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-2",
                    index % 4 === 0 ? "md:scale-105 z-10" : ""
                  )}
                >
                  <div className="relative overflow-hidden aspect-auto">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto block transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Minimalist Overlay - No Titles */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Star className="w-5 h-5 text-primary fill-primary/20" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Edutainment Program - Creative Staggered Grid (No Titles) */}
          <div className="pt-32 relative">
            <div className="flex flex-col items-center gap-4 mb-16 text-center">
              <div className="w-20 h-20 rounded-[2.5rem] bg-primary/10 border border-primary/20 flex items-center justify-center glow-gold relative z-10 transition-transform duration-500 hover:scale-110">
                <GraduationCap className="h-10 w-10 text-primary animate-pulse" />
              </div>
              <div className="relative">
                <h3 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                  Edutainment <span className="text-gradient-gold italic">Program</span>
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto border-l-2 border-primary/30 pl-6 text-left md:text-center">
                  Transformative moments from our school programs where film meets education.
                </p>
              </div>
            </div>

            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {edutainmentGalleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid relative group overflow-hidden rounded-[2.5rem] border border-primary/10 bg-secondary/5 transition-all duration-700 hover:shadow-[0_0_50px_-15px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden aspect-auto">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto block transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                       <div className="h-1 w-12 bg-primary/50 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
            {[
              {
                title: "Cinematic Journey: Classic Tales",
                date: "April 15, 2024",
                genre: "Drama / Classic",
                image: movieDate3,
                description: "An evening dedicated to the films that shaped cinema history."
              },
              {
                title: "Nairobi Independent Showcase",
                date: "April 28, 2024",
                genre: "Indie / Documentary",
                image: movieDate5,
                description: "Featuring experimental works from local burgeoning filmmakers."
              },
              {
                title: "Community Choice Night",
                date: "May 12, 2024",
                genre: "Family / Adventure",
                image: movieDate6,
                description: "A special screening voted for by our loyal community members."
              }
            ].map((event) => (
              <div
                key={event.title}
                className="bg-gradient-card rounded-2xl border border-border/50 overflow-hidden card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
