import { useState, useEffect, useRef, useCallback } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  GraduationCap,
  Lightbulb,
  Target,
  BookOpen,
  CheckCircle2,
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Images,
} from "lucide-react";

// Import video
import edutainmentVideo from "@/assets/videos/edutainment.mp4";

// Import original gallery images
import movieDate1 from "@/assets/gallery/movie/main_movie/mv1.jpeg";
import movieDate2 from "@/assets/gallery/movie/main_movie/mv2.jpeg";
import movieDate3 from "@/assets/gallery/movie/main_movie/mv3.jpeg";
import movieDate4 from "@/assets/gallery/movie/main_movie/mv4.jpeg";
import movieDate5 from "@/assets/gallery/movie/main_movie/mv5.jpeg";
import movieDate6 from "@/assets/gallery/movie/main_movie/mv6.jpeg";
import movieDate7 from "@/assets/gallery/movie/main_movie/mv7.jpeg";
import movieDate8 from "@/assets/gallery/movie/main_movie/mv8.jpeg";

// Import new gallery images
import new1 from "@/assets/gallery/movie/main_movie/new1.jpeg";
import new2 from "@/assets/gallery/movie/main_movie/new2.jpeg";
import new3 from "@/assets/gallery/movie/main_movie/new3.jpeg";
import new4 from "@/assets/gallery/movie/main_movie/new4.jpeg";
import new5 from "@/assets/gallery/movie/main_movie/new5.jpeg";
import new6 from "@/assets/gallery/movie/main_movie/new6.jpeg";
import new7 from "@/assets/gallery/movie/main_movie/new7.jpeg";
import new8 from "@/assets/gallery/movie/main_movie/new8.jpeg";
import new9 from "@/assets/gallery/movie/main_movie/new9.jpeg";
import new10 from "@/assets/gallery/movie/main_movie/new10.jpeg";
import new11 from "@/assets/gallery/movie/main_movie/new11.jpeg";
import new12 from "@/assets/gallery/movie/main_movie/new12.jpeg";
import new13 from "@/assets/gallery/movie/main_movie/new13.jpeg";
import new14 from "@/assets/gallery/movie/main_movie/new14.jpeg";
import new15 from "@/assets/gallery/movie/main_movie/new15.jpeg";
import new16 from "@/assets/gallery/movie/main_movie/new16.jpeg";
import new17 from "@/assets/gallery/movie/main_movie/new17.jpeg";
import new18 from "@/assets/gallery/movie/main_movie/new18.jpeg";
import new19 from "@/assets/gallery/movie/main_movie/new19.jpeg";
import new20 from "@/assets/gallery/movie/main_movie/new20.jpeg";
import new21 from "@/assets/gallery/movie/main_movie/new21.jpeg";
import new22 from "@/assets/gallery/movie/main_movie/new22.jpeg";
import new23 from "@/assets/gallery/movie/main_movie/new23.jpeg";
import new24 from "@/assets/gallery/movie/main_movie/new24.jpeg";
import new25 from "@/assets/gallery/movie/main_movie/new25.jpeg";
import new26 from "@/assets/gallery/movie/main_movie/new26.jpeg";
import new27 from "@/assets/gallery/movie/main_movie/new27.jpeg";
import new28 from "@/assets/gallery/movie/main_movie/new28.jpeg";
import new29 from "@/assets/gallery/movie/main_movie/new29.jpeg";
import new30 from "@/assets/gallery/movie/main_movie/new30.jpeg";
import new31 from "@/assets/gallery/movie/main_movie/new31.jpeg";
import new32 from "@/assets/gallery/movie/main_movie/new32.jpeg";
import new33 from "@/assets/gallery/movie/main_movie/new33.jpeg";
import new34 from "@/assets/gallery/movie/main_movie/new34.jpeg";
import new35 from "@/assets/gallery/movie/main_movie/new35.jpeg";
import new36 from "@/assets/gallery/movie/main_movie/new36.jpeg";
import new37 from "@/assets/gallery/movie/main_movie/new37.jpeg";
import new38 from "@/assets/gallery/movie/main_movie/new38.jpeg";
import new39 from "@/assets/gallery/movie/main_movie/new39.jpeg";
import new40 from "@/assets/gallery/movie/main_movie/new40.jpeg";
import new41 from "@/assets/gallery/movie/main_movie/new41.jpeg";
import new42 from "@/assets/gallery/movie/main_movie/new42.jpeg";
import new43 from "@/assets/gallery/movie/main_movie/new43.jpeg";
import new44 from "@/assets/gallery/movie/main_movie/new44.jpeg";
import new45 from "@/assets/gallery/movie/main_movie/new45.jpeg";
import new46 from "@/assets/gallery/movie/main_movie/new46.jpeg";
import new47 from "@/assets/gallery/movie/main_movie/new47.jpeg";
import new48 from "@/assets/gallery/movie/main_movie/new48.jpeg";
import new49 from "@/assets/gallery/movie/main_movie/new49.jpeg";
import new50 from "@/assets/gallery/movie/main_movie/new50.jpeg";
import new51 from "@/assets/gallery/movie/main_movie/new51.jpeg";
import new52 from "@/assets/gallery/movie/main_movie/new52.jpeg";
import new53 from "@/assets/gallery/movie/main_movie/new53.jpeg";
import new54 from "@/assets/gallery/movie/main_movie/new54.jpeg";

const allImages = [
  movieDate1, movieDate2, movieDate3, movieDate4,
  movieDate5, movieDate6, movieDate7, movieDate8,
  new1, new2, new3, new4, new5, new6, new7, new8, new9, new10,
  new11, new12, new13, new14, new15, new16, new17, new18, new19, new20,
  new21, new22, new23, new24, new25, new26, new27, new28, new29, new30,
  new31, new32, new33, new34, new35, new36, new37, new38, new39, new40,
  new41, new42, new43, new44, new45, new46, new47, new48, new49, new50,
  new51, new52, new53, new54,
];

// ─── Cinematic Slideshow Component ──────────────────────────────────────────
function MovieSlideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const total = images.length;
  const INTERVAL = 3000;

  const goTo = useCallback((idx: number, wrap = true) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const next = wrap ? (idx + total) % total : Math.max(0, Math.min(idx, total - 1));
    setTimeout(() => {
      setCurrent(next);
      setIsTransitioning(false);
    }, 150);
  }, [isTransitioning, total]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Auto-play
  useEffect(() => {
    if (!isPlaying || lightboxOpen) return;
    const id = setInterval(() => goTo(current + 1), INTERVAL);
    return () => clearInterval(id);
  }, [isPlaying, current, lightboxOpen, goTo]);

  // Scroll thumbnail into view
  useEffect(() => {
    const el = thumbsRef.current?.querySelector(`[data-thumb="${current}"]`) as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "ArrowLeft") goTo(lightboxIndex - 1);
        if (e.key === "ArrowRight") goTo(lightboxIndex + 1);
        if (e.key === "Escape") setLightboxOpen(false);
      } else {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, lightboxOpen, lightboxIndex, goTo]);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    setIsPlaying(false);
  };

  return (
    <div className="w-full space-y-6">
      {/* ── Main Stage ── */}
      <div className="relative rounded-[2rem] overflow-hidden bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] border border-primary/20 group">
        {/* Image */}
        <div
          className="relative aspect-[16/9] cursor-pointer overflow-hidden"
          onClick={() => openLightbox(current)}
        >
          <img
            key={current}
            src={images[current]}
            alt={`Movie Night moment ${current + 1}`}
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
            )}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

          {/* Expand hint */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
              <Maximize2 className="w-3.5 h-3.5" />
              Click to expand
            </div>
          </div>

          {/* Counter badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
              <Images className="w-3.5 h-3.5 text-primary" />
              <span className="text-white text-xs font-bold">{current + 1} / {total}</span>
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Movie Night Moments</span>
              <p className="text-white/60 text-xs mt-0.5">Angel's Experience Hub</p>
            </div>
            {/* Progress bar */}
            <div className="hidden sm:flex gap-1 items-center">
              {isPlaying && (
                <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    key={`prog-${current}`}
                    className="h-full bg-primary rounded-full"
                    style={{ animation: `progressBar ${INTERVAL}ms linear forwards` }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Left / Right Arrows ── */}
        <button
          id="slideshow-prev"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary/80 hover:border-primary transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          id="slideshow-next"
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary/80 hover:border-primary transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* ── Controls Row ── */}
      <div className="flex items-center justify-between px-2">
        <button
          onClick={() => setIsPlaying(p => !p)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border",
            isPlaying
              ? "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20"
              : "bg-secondary border-border/50 text-muted-foreground hover:text-foreground"
          )}
        >
          {isPlaying ? (
            <><span className="w-2.5 h-2.5 flex gap-0.5"><span className="w-1 h-full bg-current rounded-sm"/><span className="w-1 h-full bg-current rounded-sm"/></span> Pause</>
          ) : (
            <><Play className="w-3 h-3 fill-current" /> Play</>
          )}
        </button>

        {/* Dot indicators (show first 10 as a sample) */}
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: Math.min(total, 9) }).map((_, i) => {
            const step = Math.floor(total / Math.min(total, 9));
            const mapped = i * step;
            return (
              <button
                key={i}
                onClick={() => goTo(mapped)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  current >= mapped && current < mapped + step
                    ? "w-5 h-2 bg-primary"
                    : "w-2 h-2 bg-muted-foreground/30 hover:bg-primary/50"
                )}
                aria-label={`Jump to slide ${mapped + 1}`}
              />
            );
          })}
        </div>

        <span className="text-xs text-muted-foreground font-medium">{total} photos</span>
      </div>

      {/* ── Thumbnail Filmstrip ── */}
      <div className="relative">
        <div
          ref={thumbsRef}
          className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src, i) => (
            <button
              key={i}
              data-thumb={i}
              onClick={() => goTo(i)}
              className={cn(
                "flex-shrink-0 snap-start rounded-xl overflow-hidden transition-all duration-300 border-2",
                current === i
                  ? "border-primary scale-105 shadow-[0_0_16px_rgba(var(--primary-rgb),0.5)] opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80 hover:border-primary/40"
              )}
              style={{ width: 80, height: 56 }}
              aria-label={`View photo ${i + 1}`}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
        {/* Filmstrip fade edges */}
        <div className="absolute left-0 top-0 bottom-3 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-3 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center gap-4" onClick={e => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-2 -right-2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main lightbox image */}
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={images[lightboxIndex]}
                alt={`Photo ${lightboxIndex + 1}`}
                className="max-h-[75vh] max-w-full object-contain rounded-2xl"
              />

              {/* Lightbox arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + total) % total); }}
                className="absolute left-2 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-primary/60 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % total); }}
                className="absolute right-2 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-primary/60 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox counter */}
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <Images className="w-4 h-4 text-primary" />
              <span className="font-bold">{lightboxIndex + 1}</span>
              <span className="text-white/40">of {total}</span>
            </div>
          </div>
        </div>
      )}

      {/* Inline keyframe for progress bar */}
      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}

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
      setTimeout(() => setIsSubmitted(false), 300);
    }
  };

  return (
    <MainLayout>
      {/* Global Success Indicator */}
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
              <h3 className="font-display text-xl font-bold mb-4">Curated Selection</h3>
              <p className="text-muted-foreground">
                We select films that spark conversation, inspire thought, and provide genuine entertainment value.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Social Connection</h3>
              <p className="text-muted-foreground">
                Our events are designed to bring people together, fostering new friendships and strengthening community ties.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Memorable Vibes</h3>
              <p className="text-muted-foreground">
                From cozy indoor settings to magical outdoor screenings, we create the perfect atmosphere for every film.
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
                    <div className="text-3xl font-display font-bold text-gradient-gold">10+</div>
                    <p className="text-sm text-muted-foreground">Schools Reached</p>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-gradient-gold">500+</div>
                    <p className="text-sm text-muted-foreground">Students Impacted</p>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-gradient-gold">10+</div>
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

            {/* Video Side */}
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-secondary/30 rounded-full blur-[80px] animate-pulse delay-700" />
              <div className="relative w-full max-w-2xl mx-auto">
                <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                  <DialogTrigger asChild>
                    <div className="w-full h-[350px] sm:h-[500px] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.4)] border-2 border-primary/30 relative group card-hover cursor-pointer bg-black">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section with Slideshow ── */}
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
              A visual journey through our movie nights and edutainment sessions.
            </p>
          </div>

          {/* Movie Night Moments — Cinematic Slideshow */}
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

            {/* Cinematic Gallery Grid (Top 7) */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {allImages.slice(0, 7).map((src, i) => (
                  <div key={`static-${i}`} className={cn(
                    "relative rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(var(--primary-rgb),0.3)] border border-primary/20 bg-black group",
                    i === 0 ? "col-span-2 row-span-2" : "col-span-1"
                  )}>
                    <img
                      src={src}
                      alt={`Movie Highlight ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            {/* Cinematic Slideshow (Remaining Photos) */}
            <MovieSlideshow images={allImages.slice(7)} />
          </div>

          {/* Edutainment Program — Video Only */}
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

            {/* Centred video player */}
            <div className="max-w-4xl mx-auto">
              <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                <DialogTrigger asChild>
                  <div className="w-full h-[400px] sm:h-[520px] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.4)] border-2 border-primary/30 relative group card-hover cursor-pointer bg-black">
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
                      <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm">Watch the Full Story</span>
                    </div>

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
              Don't miss out on our upcoming movie events. Reserve your spot and be part of something special.
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
                  <h3 className="font-display text-lg font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="gold-outline" size="sm" className="w-full" asChild>
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
            Be the first to know about upcoming screenings, special events, and exclusive movie night experiences.
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
