import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  BookOpen,
} from "lucide-react";

// Mock blog posts data - this would typically come from an API
const blogPostsData: Record<
  string,
  {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
    tags: string[];
  }
> = {
  "mastering-event-hosting": {
    id: 1,
    slug: "mastering-event-hosting",
    title: "The Art of Mastering Event Hosting: Tips from a Professional MC",
    excerpt:
      "Discover the key principles that transform a good event into an memorable experience.",
    content: `
## Introduction

Event hosting is more than just speaking into a microphone—it's about creating an atmosphere, guiding emotions, and ensuring every moment flows seamlessly into the next. After hosting over 500 events, I've learned that the difference between a good event and an memorable one lies in the details.

## Reading the Room

The most crucial skill any MC can develop is the ability to read the room. This means:

- **Observing body language**: Are guests engaged or distracted?
- **Listening to the energy**: Is the room buzzing with excitement or settling into fatigue?
- **Adapting in real-time**: Being prepared to shift gears when the mood calls for it

## The Power of Perfect Timing

Timing isn't just about starting on schedule—it's about knowing when to pause, when to accelerate, and when to let a moment breathe. A well-timed pause can be more powerful than any words.

### Key Timing Principles:

1. **Always arrive early** - This gives you time to assess the venue and meet key stakeholders
2. **Build in buffer time** - Events rarely go exactly as planned
3. **Know your transitions** - Smooth handoffs between segments keep energy high

## Connecting with Your Audience

The best MCs don't just talk *to* their audience—they talk *with* them. Here are some techniques I use:

> "Every audience is unique. Your job isn't to perform for them, but to become one with them."

- Make eye contact with individuals, not just the crowd
- Use inclusive language ("we," "us," "together")
- Reference shared experiences or current events
- Don't be afraid to show genuine emotion

## Handling the Unexpected

Murphy's Law is especially true at events. Here's how I prepare:

| Situation | Response |
|-----------|----------|
| Technical difficulties | Have backup content ready |
| Late speakers | Engage audience with Q&A or stories |
| Awkward silences | Embrace them or fill with relevant anecdotes |

## Conclusion

Mastering event hosting is a journey, not a destination. Every event teaches you something new, and the best MCs never stop learning. Whether you're hosting your first wedding or your hundredth corporate gala, remember: your energy sets the tone for everyone else.

*Ready to create memorable moments at your next event? [Get in touch](/contact) and let's make it happen.*
    `,
    author: "Angel",
    date: "2024-01-15",
    category: "MC Tips",
    readTime: "5 min read",
    tags: [
      "Event Hosting",
      "MC Tips",
      "Public Speaking",
      "Professional Development",
    ],
  },
  "customer-experience-2024": {
    id: 2,
    slug: "customer-experience-2024",
    title: "Customer Experience Trends to Watch in 2024",
    excerpt:
      "The landscape of customer experience is evolving rapidly. Here are the trends that will define how businesses connect with their customers.",
    content: `
## The Evolution of Customer Experience

Customer experience (CX) has transformed from a nice-to-have into a critical business differentiator. In 2024, the companies that thrive will be those that understand and adapt to these emerging trends.

## 1. Hyper-Personalization

Gone are the days of one-size-fits-all experiences. Today's customers expect:

- **Tailored recommendations** based on their unique preferences
- **Contextual interactions** that remember their history
- **Proactive service** that anticipates their needs

## 2. The Rise of AI-Powered Support

Artificial intelligence is revolutionizing how businesses serve their customers:

> "AI doesn't replace human connection—it enhances it by handling routine tasks so humans can focus on what matters most."

### Key AI Applications:
- Intelligent chatbots for 24/7 support
- Predictive analytics for issue prevention
- Sentiment analysis for real-time feedback

## 3. Omnichannel Becomes Table Stakes

Customers expect seamless experiences across all touchpoints:

- Social media
- Email
- Phone
- In-person
- Chat
- Self-service portals

## 4. Employee Experience = Customer Experience

Happy employees create happy customers. Companies are investing in:

| Focus Area | Impact on CX |
|------------|--------------|
| Training & Development | Better-equipped staff |
| Work-Life Balance | More engaged interactions |
| Recognition Programs | Higher service motivation |

## 5. Sustainability as a CX Factor

Modern consumers care about values. They want to support businesses that:

- Practice environmental responsibility
- Demonstrate social consciousness
- Maintain transparent operations

## Looking Ahead

The future of CX is exciting and challenging. Organizations that embrace these trends will build stronger, more loyal customer relationships.

*Want to transform your customer experience strategy? [Let's talk about training options](/cx-training).*
    `,
    author: "Angel",
    date: "2024-01-10",
    category: "CX Insights",
    readTime: "7 min read",
    tags: ["Customer Experience", "CX Trends", "Business Strategy", "2024"],
  },
  "power-of-storytelling": {
    id: 3,
    slug: "power-of-storytelling",
    title: "The Power of Storytelling in Public Speaking",
    excerpt:
      "Stories have the unique ability to captivate audiences and make messages memorable. Learn how to weave compelling narratives.",
    content: `
## Why Stories Matter

Since the dawn of humanity, stories have been our primary way of sharing knowledge, building connections, and inspiring action. In public speaking, they remain the most powerful tool at your disposal.

## The Science Behind Stories

When you share a story, something magical happens in your listener's brain:

- **Neural coupling** - Their brain activity mirrors yours
- **Dopamine release** - Emotional moments trigger memory formation
- **Oxytocin production** - Connection and trust build naturally

## Elements of a Compelling Story

### 1. A Relatable Character

Your audience needs someone to root for. This could be:
- You (personal stories)
- A client or customer
- A historical figure
- Even the audience themselves

### 2. Conflict or Challenge

> "Without tension, there is no story. It's the struggle that makes the triumph meaningful."

Every great story involves overcoming obstacles:
- External challenges (competitors, circumstances)
- Internal battles (fear, doubt, growth)
- Unexpected twists

### 3. Transformation

The best stories show change:

| Before | After |
|--------|-------|
| Doubt | Confidence |
| Confusion | Clarity |
| Struggle | Success |

## Practical Storytelling Tips

1. **Start in the middle** - Hook them with action
2. **Use sensory details** - Paint pictures with words
3. **Practice the pause** - Let moments land
4. **Know your ending** - Work backward from your point

## Common Storytelling Mistakes

- Making it all about you
- Including too many details
- Forgetting the business connection
- Not practicing delivery

## Your Story Starts Now

Every presentation, every speech, every meeting is an opportunity to connect through story. Start collecting your experiences—they're your greatest speaking assets.

*Ready to elevate your storytelling skills? [Explore my training programs](/cx-training).*
    `,
    author: "Angel",
    date: "2024-01-05",
    category: "Public Speaking",
    readTime: "6 min read",
    tags: [
      "Storytelling",
      "Public Speaking",
      "Communication",
      "Presentation Skills",
    ],
  },
  "building-customer-loyalty": {
    id: 4,
    slug: "building-customer-loyalty",
    title: "Building Customer Loyalty: Beyond Satisfaction",
    excerpt:
      "Satisfied customers are good, but loyal customers are gold. Explore strategies that turn one-time buyers into lifelong advocates.",
    content: `
## The Loyalty Ladder

Customer satisfaction is just the first step. True loyalty requires ascending through multiple levels of relationship:

1. **Satisfied** - Basic expectations met
2. **Delighted** - Expectations exceeded
3. **Loyal** - Repeat business by choice
4. **Advocate** - Active recommendation to others

## The Economics of Loyalty

> "Acquiring a new customer costs 5x more than retaining an existing one."

Consider these statistics:
- Loyal customers spend **67% more** than new ones
- A 5% increase in retention can boost profits by **25-95%**
- Advocates bring in **new customers for free**

## Building Blocks of Loyalty

### 1. Consistency

Customers need to trust that their experience will be reliable:
- Same quality every time
- Dependable service levels
- Consistent communication

### 2. Recognition

Make customers feel valued:

| Action | Impact |
|--------|--------|
| Remember preferences | Personal connection |
| Acknowledge milestones | Emotional bond |
| Reward loyalty | Tangible appreciation |

### 3. Community

Create belonging:
- Exclusive events or content
- Member forums or groups
- Shared values and mission

## The Emotional Connection

Loyalty isn't logical—it's emotional. Customers become loyal when they:

- Feel understood
- Share your values
- Identify with your brand
- Trust you completely

## Measuring Loyalty

Key metrics to track:
- Net Promoter Score (NPS)
- Customer Lifetime Value (CLV)
- Repeat purchase rate
- Referral rate

## Action Steps

1. Map your customer journey
2. Identify moments that matter
3. Design for emotion, not just efficiency
4. Train your team on relationship-building
5. Celebrate and reward loyal customers

*Transform your customer relationships. [Contact me](/contact) to discuss training for your team.*
    `,
    author: "Angel",
    date: "2024-01-01",
    category: "CX Insights",
    readTime: "8 min read",
    tags: [
      "Customer Loyalty",
      "Customer Retention",
      "Business Growth",
      "CX Strategy",
    ],
  },
  "movie-nights-community": {
    id: 5,
    slug: "movie-nights-community",
    title: "How Movie Nights Build Stronger Communities",
    excerpt:
      "There's something magical about sharing a film experience with others. Discover how communal viewing creates lasting bonds.",
    content: `
## The Magic of Shared Experience

There's a reason humans have gathered around stories since cave paintings and campfires. Sharing a narrative experience creates bonds that transcend ordinary interaction.

## Why Movie Nights Work

When we watch films together, we:

- **Share emotions** in real-time
- **Create common references** for future conversations
- **Experience vulnerability** together
- **Build collective memories**

> "A movie watched alone is entertainment. A movie watched together is connection."

## The Science of Collective Viewing

Research shows that synchronized experiences strengthen social bonds:

| Phenomenon | Effect |
|------------|--------|
| Emotional synchrony | Increased empathy |
| Shared laughter | Oxytocin release |
| Collective tension | Bonding through anticipation |
| Group discussion | Deeper understanding |

## Creating Meaningful Movie Experiences

### Curate Intentionally

Choose films that:
- Spark conversation
- Explore relevant themes
- Balance entertainment with depth
- Appeal to diverse perspectives

### Design the Environment

The setting matters:
- Comfortable seating arrangements
- Quality audio and visual
- Ambient lighting
- Refreshments that encourage lingering

### Facilitate Connection

The movie is just the beginning:
- Pre-film introductions
- Post-screening discussions
- Follow-up gatherings
- Shared reflection activities

## Movie Date with Angel

This is exactly why I created Movie Date with Angel. It's not just about watching films—it's about:

- Building genuine connections
- Creating safe spaces for conversation
- Exploring ideas through cinema
- Forming lasting friendships

## The Ripple Effect

Communities built around shared experiences tend to:

1. Support each other beyond the activity
2. Introduce new members organically
3. Develop their own culture and traditions
4. Extend connections into other areas of life

## Start Your Own

You don't need anything fancy to begin:
- A living room works perfectly
- Start with a small, committed group
- Choose films with purpose
- Make discussion a ritual

*Want to join our community? [Explore Movie Date with Angel](/movie-date).*
    `,
    author: "Angel",
    date: "2023-12-28",
    category: "Community",
    readTime: "4 min read",
    tags: ["Community Building", "Movie Nights", "Social Connection", "Events"],
  },
  "wedding-mc-guide": {
    id: 6,
    slug: "wedding-mc-guide",
    title: "The Ultimate Guide to Being a Wedding MC",
    excerpt:
      "Weddings are deeply personal events that require a special touch. Here's everything you need to know about hosting the perfect celebration.",
    content: `
## The Weight of the Moment

Being a wedding MC is one of the most meaningful roles you can take on. You're not just hosting an event—you're helping write a love story.

## Before the Big Day

### 1. Meet the Couple

Understanding their vision is essential:
- What's their story?
- What tone do they want? (Formal, fun, emotional?)
- Are there cultural or religious considerations?
- Who are the key players?

### 2. Know the Schedule

Create a detailed timeline:

| Time | Activity | Notes |
|------|----------|-------|
| 5:00 | Guests arrive | Background music |
| 5:30 | Ceremony begins | Signal to officiant |
| 6:00 | Cocktail hour | Announce dinner time |
| 7:00 | Reception dinner | Introduction of couple |

### 3. Prepare Your Material

Have ready:
- Couple's introduction
- Speaker list and cues
- Transition phrases
- Emergency filler content
- Pronunciation guide for names

## During the Wedding

### Opening Strong

> "The first 30 seconds set the tone for everything that follows."

Tips for your entrance:
- Thank everyone for being there
- Acknowledge the moment's significance
- Introduce yourself briefly
- Set expectations for the evening

### Managing Transitions

Smooth handoffs keep energy flowing:
- Use music strategically
- Give clear cues to vendors
- Keep speeches on schedule (gently)
- Fill gaps with engaging content

### Handling Speeches

Protect the couple's time:
- Brief speakers on time limits beforehand
- Have signals for wrap-up
- Be ready to step in gracefully
- Transition smoothly between speakers

## The Emotional Moments

Weddings are emotional. Be prepared for:
- Tears (yours included)
- Unexpected changes
- Technical difficulties
- Family dynamics

### How to Handle:
1. Stay calm and composed
2. Have backup plans
3. Keep focus on the couple
4. Find the joy in imperfection

## Common Mistakes to Avoid

- Making it about yourself
- Inside jokes others don't understand
- Controversial topics or humor
- Over-drinking
- Poor time management

## The Finale

End on a high note:
- Thank vendors and family
- Final well-wishes for the couple
- Clear instructions for what's next
- Express genuine gratitude

## My Wedding Promise

Every wedding I host receives:
- Full pre-event consultation
- Customized script and timeline
- Day-of coordination
- Post-event follow-up

*Planning your special day? [Let's create magic together](/contact).*
    `,
    author: "Angel",
    date: "2023-12-20",
    category: "MC Tips",
    readTime: "10 min read",
    tags: ["Wedding MC", "Event Hosting", "Weddings", "Professional Tips"],
  },
};

// Get related posts
const getRelatedPosts = (currentSlug: string, category: string) => {
  return Object.values(blogPostsData)
    .filter((post) => post.slug !== currentSlug)
    .filter(
      (post) =>
        post.category === category ||
        post.tags.some((tag) => blogPostsData[currentSlug]?.tags.includes(tag)),
    )
    .slice(0, 3);
};

// Simple markdown-like content renderer
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let inList = false;
  let inTable = false;
  let tableRows: string[][] = [];
  let listItems: string[] = [];

  const processInlineFormatting = (text: string) => {
    // Process bold, italic, links, and inline code
    let result = text;

    // Bold
    result = result.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Italic
    result = result.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // Links
    result = result.replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-primary hover:underline">$1</a>',
    );

    // Inline code
    result = result.replace(
      /`(.+?)`/g,
      '<code class="bg-secondary px-1.5 py-0.5 rounded text-sm">$1</code>',
    );

    return result;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Empty line
    if (!trimmedLine) {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul
            key={`list-${i}`}
            className="list-disc list-inside space-y-2 mb-6 text-muted-foreground"
          >
            {listItems.map((item, idx) => (
              <li
                key={idx}
                dangerouslySetInnerHTML={{
                  __html: processInlineFormatting(item),
                }}
              />
            ))}
          </ul>,
        );
        listItems = [];
        inList = false;
      }
      if (inTable && tableRows.length > 0) {
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {tableRows[0]?.map((cell, idx) => (
                    <th key={idx} className="text-left p-3 font-semibold">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(2).map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-border/50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="p-3 text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
        tableRows = [];
        inTable = false;
      }
      continue;
    }

    // H2
    if (trimmedLine.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="font-display text-2xl font-bold mt-10 mb-4"
        >
          {trimmedLine.slice(3)}
        </h2>,
      );
      continue;
    }

    // H3
    if (trimmedLine.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="font-display text-xl font-semibold mt-8 mb-3"
        >
          {trimmedLine.slice(4)}
        </h3>,
      );
      continue;
    }

    // Blockquote
    if (trimmedLine.startsWith("> ")) {
      elements.push(
        <blockquote
          key={`quote-${i}`}
          className="border-l-4 border-primary pl-6 py-2 my-6 italic text-lg text-muted-foreground bg-secondary/30 rounded-r-lg"
        >
          {trimmedLine.slice(2).replace(/"/g, "")}
        </blockquote>,
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmedLine)) {
      const match = trimmedLine.match(/^\d+\.\s(.+)/);
      if (match) {
        elements.push(
          <div
            key={`ol-${i}`}
            className="flex items-start gap-3 mb-2 text-muted-foreground"
          >
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-medium">
              {trimmedLine.match(/^\d+/)?.[0]}
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: processInlineFormatting(match[1]),
              }}
            />
          </div>,
        );
      }
      continue;
    }

    // Unordered list
    if (trimmedLine.startsWith("- ")) {
      inList = true;
      listItems.push(trimmedLine.slice(2));
      continue;
    }

    // Table
    if (trimmedLine.startsWith("|")) {
      inTable = true;
      const cells = trimmedLine
        .split("|")
        .filter((cell) => cell.trim())
        .map((cell) => cell.trim());
      if (!trimmedLine.includes("---")) {
        tableRows.push(cells);
      }
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={`p-${i}`}
        className="text-muted-foreground mb-4 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: processInlineFormatting(trimmedLine),
        }}
      />,
    );
  }

  // Handle remaining list items
  if (listItems.length > 0) {
    elements.push(
      <ul
        key="list-final"
        className="list-disc list-inside space-y-2 mb-6 text-muted-foreground"
      >
        {listItems.map((item, idx) => (
          <li
            key={idx}
            dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }}
          />
        ))}
      </ul>,
    );
  }

  return elements;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <MainLayout>
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-hero min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl font-bold mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Button variant="gold" onClick={() => navigate("/blog")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </section>
      </MainLayout>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(post.title);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            {/* Category */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <Tag className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Article Content */}
            <article className="prose prose-invert prose-lg max-w-none">
              {renderContent(post.content)}
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground text-sm">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                  Share this article
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold mb-8 text-center">
              Related <span className="text-gradient-gold">Articles</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-gradient-card rounded-xl border border-border/50 overflow-hidden card-hover"
                >
                  <div className="h-32 bg-secondary/50 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-display font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {relatedPost.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's work together to create memorable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="gold-outline" asChild>
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  More Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
