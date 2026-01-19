import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Event Director, TechCorp",
    content: "Angel transformed our annual conference into an experience that attendees still talk about. His energy, professionalism, and ability to read the room is unmatched. Absolutely brilliant!",
    rating: 5,
    service: "MC Services",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "HR Manager, GlobalBank",
    content: "The CX training our team received was transformative. Within months, our customer satisfaction scores improved by 40%. Angel's approach is practical, engaging, and results-driven.",
    rating: 5,
    service: "CX Training",
  },
  {
    id: 3,
    name: "Amara Okonkwo",
    role: "Wedding Planner",
    content: "I've worked with many MCs, but Angel stands out for his warmth, preparation, and ability to make everyone feel special. Every wedding he hosts becomes a beautiful celebration.",
    rating: 5,
    service: "MC Services",
  },
  {
    id: 4,
    name: "David Osei",
    role: "Entertainment Blogger",
    content: "Movie Date with Angel is a unique concept that brings cinema enthusiasts together in the most delightful way. It's not just about movies; it's about community and connection.",
    rating: 5,
    service: "Movie Date",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What Clients{" "}
            <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from real clients who've transformed their events and teams with my services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial */}
            <div className="bg-gradient-card rounded-3xl border border-border/50 p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/10" />
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light italic">
                  "{testimonials[activeIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-semibold text-primary">
                      {testimonials[activeIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {testimonials[activeIndex].service}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrev}
                className="rounded-full border border-border/50 hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(index);
                    }}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="rounded-full border border-border/50 hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
