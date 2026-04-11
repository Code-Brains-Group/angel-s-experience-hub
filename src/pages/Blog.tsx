import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Calendar, User, Tag } from "lucide-react";

// Import images for blog posts
import cxTraining1 from "@/assets/gallery/cx-training-1.jpg";
import mcEvent2 from "@/assets/gallery/mc-event-2.jpg";
import movieDate1 from "@/assets/gallery/movie-date-1.jpg";
import edutainment1 from "@/assets/gallery/edutainment-1.jpg";

// Blog posts
const blogPosts = [
  {
    id: 1,
    slug: "customer-experience-2026",
    title: "Customer Experience Trends to Watch in 2026",
    excerpt:
      "In 2026, CX is no longer a department — it is the business itself. Explore the trends reshaping how brands are perceived, trusted, and chosen...",
    author: "Angel",
    date: "2026-04-12",
    category: "CX Insights",
    readTime: "7 min read",
    image: cxTraining1,
  },
  {
    id: 2,
    slug: "power-of-storytelling",
    title: "The Power of Storytelling in Public Speaking",
    excerpt:
      "Facts inform, but stories stay. Discover why storytelling is the most powerful tool in any speaker's toolkit and how to use it effectively...",
    author: "Angel",
    date: "2026-04-12",
    category: "Public Speaking",
    readTime: "6 min read",
    image: mcEvent2,
  },
  {
    id: 3,
    slug: "movie-nights-community",
    title: "How Movie Nights Build Stronger Communities",
    excerpt:
      "Not every meaningful connection begins with a deep conversation. Sometimes it starts with gathering in the same space and sharing a story together...",
    author: "Angel",
    date: "2026-04-12",
    category: "Community",
    readTime: "5 min read",
    image: movieDate1,
  },
  {
    id: 4,
    slug: "movie-date-with-angel-story",
    title: "From Movie Nights to a Movement: The Story Behind Movie Date with Angel",
    excerpt:
      "A question asked after every film changed everything. Discover how a bond built with a mother became a community, and a community became a movement...",
    author: "Angel",
    date: "2026-04-12",
    category: "Community",
    readTime: "8 min read",
    image: edutainment1,
  },
];

const categories = [
  "All",
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
