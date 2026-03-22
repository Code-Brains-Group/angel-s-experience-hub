import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  variant?: "masonry" | "grid" | "featured" | "bento" | "marquee";
}

export function ImageGallery({
  images,
  title,
  subtitle,
  variant = "masonry"
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  // Masonry layout with varied sizes
  const getMasonryClass = (index: number) => {
    const patterns = [
      "col-span-1 row-span-1",
      "col-span-1 row-span-2 md:col-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1 md:col-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1 md:col-span-1",
      "col-span-1 row-span-1",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <div className="text-center max-w-3xl mx-auto mb-16">
              {title && (
                <>
                  <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                    Gallery
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                    {title}
                  </h2>
                </>
              )}
              {subtitle && (
                <p className="text-lg text-muted-foreground">{subtitle}</p>
              )}
            </div>
          )}

          {variant === "masonry" && (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 pt-12">
                        <p className="text-sm font-medium text-foreground">{image.caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {variant === "grid" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-sm font-medium text-foreground">{image.caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {variant === "featured" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl border border-border/50"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-base font-medium text-foreground">{image.caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {variant === "bento" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[250px] max-w-7xl mx-auto">
              {images.map((image, index) => {
                // Determine span styles based on index to create a beautiful bento box layout
                let spanClasses = "md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-1";
                if (index === 0) spanClasses = "md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2"; // Large feature image
                else if (index === 3 || index === 4 || index === 5) spanClasses = "md:col-span-2 lg:col-span-2 md:row-span-1 lg:row-span-1"; // Horizontal span 2

                return (
                  <div
                    key={index}
                    className={cn(
                      "relative group overflow-hidden rounded-[2rem] shadow-xl border border-border/50 card-hover cursor-pointer",
                      spanClasses
                    )}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {index === 0 && (
                        <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-primary text-xs font-bold tracking-wider uppercase mb-3 border border-primary/20">
                          Featured Showcase
                        </span>
                      )}
                      {image.caption && (
                        <p className={cn(
                          "font-display font-bold text-foreground drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]",
                          index === 0 ? "text-3xl leading-tight" : "text-xl"
                        )}>
                          {image.caption}
                        </p>
                      )}
                    </div>

                    {/* Hover Zoom Icon centered */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 border border-primary/30">
                        <ZoomIn className="h-6 w-6 text-primary drop-shadow-md" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {variant === "marquee" && (
            <div 
              className="relative w-full overflow-hidden py-10 flex flex-col gap-6 lg:gap-8 pause-marquee"
              style={{
                WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
              }}
            >
              {/* Row 1 - scrolling left */}
              <div className="flex w-fit gap-6 lg:gap-8 animate-marquee">
                {[...images.slice(0, Math.ceil(images.length / 2)), ...images.slice(0, Math.ceil(images.length / 2))].map((image, index) => (
                  <div
                    key={`row1-${index}`}
                    className="relative w-[280px] sm:w-[350px] lg:w-[450px] aspect-[4/3] flex-shrink-0 group overflow-hidden rounded-[2rem] shadow-2xl border border-border/50 cursor-pointer"
                    onClick={() => openLightbox(index % Math.ceil(images.length / 2))}
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 border border-primary/30">
                        <ZoomIn className="h-6 w-6 text-primary drop-shadow-md" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-2xl font-display font-bold text-foreground mb-1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 - scrolling right */}
              <div className="flex w-fit gap-6 lg:gap-8 animate-marquee-reverse -ml-[20%]">
                {[...images.slice(Math.ceil(images.length / 2)), ...images.slice(Math.ceil(images.length / 2))].map((image, index) => (
                  <div
                    key={`row2-${index}`}
                    className="relative w-[280px] sm:w-[350px] lg:w-[450px] aspect-[4/3] flex-shrink-0 group overflow-hidden rounded-[2rem] shadow-2xl border border-border/50 cursor-pointer"
                    onClick={() => openLightbox(Math.ceil(images.length / 2) + (index % Math.floor(images.length / 2)))}
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 border border-primary/30">
                        <ZoomIn className="h-6 w-6 text-primary drop-shadow-md" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-2xl font-display font-bold text-foreground mb-1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-5xl max-h-[80vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
            />
            {images[currentIndex].caption && (
              <div className="text-center mt-6">
                <p className="text-lg text-foreground font-medium">
                  {images[currentIndex].caption}
                </p>
              </div>
            )}
            <div className="text-center mt-4">
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4">
            {images.map((image, index) => (
              <button
                key={index}
                className={cn(
                  "w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all",
                  currentIndex === index
                    ? "border-primary opacity-100 scale-105"
                    : "border-transparent opacity-50 hover:opacity-75"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
