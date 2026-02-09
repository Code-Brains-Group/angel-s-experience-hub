import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Calendar, User, Tag } from "lucide-react";

// Import images for blog posts
import mcEvent1 from "@/assets/gallery/mc-event-1.jpg";
import mcEvent2 from "@/assets/gallery/mc-event-2.jpg";
import cxTraining1 from "@/assets/gallery/cx-training-1.jpg";
import cxTraining2 from "@/assets/gallery/cx-training-2.jpg";
import movieDate1 from "@/assets/gallery/movie-date-1.jpg";
import mcEvent3 from "@/assets/gallery/mc-event-3.jpg";

// Mock blog posts - these would typically come from an API
const blogPosts = [
  {
    id: 1,
    slug: "mastering-event-hosting",
    title: "The Art of Mastering Event Hosting: Tips from a Professional MC",
    excerpt:
      "Discover the key principles that transform a good event into an memorable experience. From reading the room to perfect timing...",
    author: "Angel",
    date: "2024-01-15",
    category: "MC Tips",
    readTime: "5 min read",
    image: mcEvent1,
  },
  {
    id: 2,
    slug: "customer-experience-2024",
    title: "Customer Experience Trends to Watch in 2024",
    excerpt:
      "The landscape of customer experience is evolving rapidly. Here are the trends that will define how businesses connect with their customers...",
    author: "Angel",
    date: "2024-01-10",
    category: "CX Insights",
    readTime: "7 min read",
    image: cxTraining1,
  },
  {
    id: 3,
    slug: "power-of-storytelling",
    title: "The Power of Storytelling in Public Speaking",
    excerpt:
      "Stories have the unique ability to captivate audiences and make messages memorable. Learn how to weave compelling narratives...",
    author: "Angel",
    date: "2024-01-05",
    category: "Public Speaking",
    readTime: "6 min read",
    image: mcEvent2,
  },
  {
    id: 4,
    slug: "building-customer-loyalty",
    title: "Building Customer Loyalty: Beyond Satisfaction",
    excerpt:
      "Satisfied customers are good, but loyal customers are gold. Explore strategies that turn one-time buyers into lifelong advocates...",
    author: "Angel",
    date: "2024-01-01",
    category: "CX Insights",
    readTime: "8 min read",
    image: cxTraining2,
  },
  {
    id: 5,
    slug: "movie-nights-community",
    title: "How Movie Nights Build Stronger Communities",
    excerpt:
      "There's something magical about sharing a film experience with others. Discover how communal viewing creates lasting bonds...",
    author: "Angel",
    date: "2023-12-28",
    category: "Community",
    readTime: "4 min read",
    image: movieDate1,
  },
  {
    id: 6,
    slug: "wedding-mc-guide",
    title: "The Ultimate Guide to Being a Wedding MC",
    excerpt:
      "Weddings are deeply personal events that require a special touch. Here's everything you need to know about hosting the perfect celebration...",
    author: "Angel",
    date: "2023-12-20",
    category: "MC Tips",
    readTime: "10 min read",
    image: mcEvent3,
  },
];

const categories = [
  "All",
  "MC Tips",
  "CX Insights",
  "Public Speaking",
  "Community",
];

export default function Blog() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                Insights & Stories
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              The <span className="text-gradient-gold">Blog</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Thoughts on hosting, customer experience, storytelling, and the
              art of creating memorable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-xl z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-gradient-card rounded-2xl border border-border/50 overflow-hidden card-hover"
              >
                {/* Thumbnail */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Read More Link - full card clickable */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="absolute inset-0"
                  aria-label={`Read ${post.title}`}
                />
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="gold-outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Never Miss a <span className="text-gradient-gold">Story</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to get the latest insights on hosting, CX, and creating
              memorable experiences delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="gold">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
