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

  "customer-experience-2026": {
    id: 2,
    slug: "customer-experience-2026",
    title: "Customer Experience Trends to Watch in 2026",
    excerpt:
      "In 2026, customer experience is no longer a function within a business — it is the business itself. Discover the trends shaping how brands are perceived, trusted, and ultimately chosen.",
    content: `
There was a time when customer experience was defined by politeness, speed, and the ability to resolve an issue on the first call. Today, that definition feels almost incomplete. In 2026, customer experience is no longer a function within a business. It is the business itself, shaping how brands are perceived, trusted, and ultimately chosen.

What is striking is not just how fast things are changing, but how deeply expectations are evolving. Customers are more informed, less loyal, and far more intentional about where they invest their time and money. For organizations, this creates both pressure and opportunity, and the difference lies in how well they understand the trends shaping this new landscape.

## AI as a Co-Creator of Experience

One of the most defining shifts is the rise of AI as a co-creator of experience rather than just a support tool. Businesses are moving beyond experimentation and embedding AI into everyday customer interactions, using it to resolve issues faster and enhance efficiency across service teams. Yet, this transformation comes with a delicate balance. Customers are not entirely comfortable with fully automated interactions, and many still worry about losing access to human support. In fact, the concern about the erosion of human connection remains one of the biggest tensions in modern CX.

This tension is shaping a new expectation, one where technology must feel human. The future of customer experience is not about choosing between AI and people, but about blending both seamlessly. The organizations that will lead in 2026 are those that use AI to enhance empathy, not replace it, ensuring that every automated interaction still feels personal and considered.

## The Growing Demand for Transparency

Closely tied to this is the growing demand for transparency. Customers are becoming increasingly aware of how their data is used and how decisions are made, especially when AI is involved. A significant majority want to understand why systems behave the way they do, yet only a fraction of companies are currently able to provide that clarity. Trust, therefore, is no longer assumed. It must be earned through openness, clear communication, and ethical use of technology.

## Personalization Enters a New Era

At the same time, personalization is entering a new era. It is no longer enough to address customers by name or recommend products based on past behavior. In 2026, customers expect real time responsiveness, where brands can understand intent instantly and adapt experiences on the spot. This shift toward real time experience orchestration is redefining what it means to be customer centric, moving from reactive service to proactive engagement.

## The Changing Nature of Customer Loyalty

Another powerful trend shaping the landscape is the changing nature of customer loyalty. Economic pressures are making customers more value conscious and less emotionally tied to brands. They are willing to switch quickly if they perceive better value elsewhere, which means loyalty must now be continuously earned rather than assumed. For businesses, this raises the bar significantly. Delivering a good experience is no longer enough. It must be consistently excellent and clearly valuable.

## The Importance of Data Quality

Behind all these trends lies a quieter but equally critical shift — the importance of data quality. As organizations invest in AI and personalization, the effectiveness of these tools depends entirely on the quality of the data that powers them. In 2026, success in CX is less about having more data and more about having better, cleaner, and more connected data that can drive meaningful insights.

## A More Unified Approach

What is emerging is a more unified approach to customer experience. CX is no longer owned by a single department but is becoming a shared responsibility across the entire organization. From product design to marketing to customer support, every touchpoint contributes to the overall experience, and any disconnect is immediately felt by the customer.

As we look ahead, one thing becomes clear. Customer experience in 2026 is defined by a simple but powerful principle. Effortless, human, and trustworthy interactions will always win. Technology will continue to evolve, strategies will continue to shift, but the brands that succeed will be those that never lose sight of the human being at the center of every interaction.

In the end, customer experience is not just about meeting expectations. It is about understanding them deeply enough to stay ahead, and delivering in a way that feels seamless, intentional, and genuinely human.
    `,
    author: "Angel",
    date: "2026-04-12",
    category: "CX Insights",
    readTime: "7 min read",
    tags: ["Customer Experience", "CX Trends", "Business Strategy", "AI", "2026"],
  },
  "power-of-storytelling": {
    id: 3,
    slug: "power-of-storytelling",
    title: "The Power of Storytelling in Public Speaking",
    excerpt:
      "Facts inform, but stories stay. Discover how storytelling transforms speeches from informative to impactful and why it is the most powerful tool in any speaker's toolkit.",
    content: `
Facts inform, but stories stay.

In public speaking, this distinction matters more than most realize. You can stand before an audience with well researched data, structured arguments, and clear points, yet still fail to leave a lasting impression. What transforms a speech from informative to impactful is the ability to tell a story that people can see, feel, and remember.

## The Bridge Between Speaker and Audience

Storytelling is not just a creative addition to a speech. It is the bridge between the speaker and the audience. It turns information into something relatable, giving listeners a way to connect your message to their own experiences. When people recognize themselves in what you are saying, they stop listening passively and begin engaging actively.

One of the greatest strengths of storytelling is its ability to simplify complex ideas. Instead of overwhelming an audience with layered explanations, a well crafted story presents the same idea in a way that feels natural and easy to follow. It allows the speaker to guide the audience through a journey rather than present them with scattered points.

## The Power of Memory

Memory also plays a critical role here. People rarely remember statistics or structured outlines long after a speech ends, but they remember stories. They remember the emotion behind them, the lesson within them, and the way they made them feel. This is what gives storytelling its lasting power. It extends the life of your message beyond the moment you deliver it.

In professional environments, storytelling is sometimes overlooked in favor of a more formal approach. However, formality without connection often leads to disengagement. Whether in a boardroom, a conference, or a team meeting, stories bring clarity and depth to communication. They provide context, illustrate outcomes, and make ideas easier to grasp and apply.

## Authenticity at the Heart of Storytelling

Authenticity remains at the heart of effective storytelling. Audiences can quickly sense when a story feels forced or disconnected. The most powerful stories are often the simplest ones, shared with honesty and purpose. They do not need to be dramatic to be impactful. What matters is that they are real and aligned with the message you are trying to convey.

Delivery is equally important. The way a story is told can either draw people in or push them away. A thoughtful pace, intentional pauses, and variation in tone create rhythm and keep the audience engaged. It is not just about what you say, but how you say it.

## Storytelling as a Flexible Tool

Storytelling also gives speakers the ability to adapt. When energy in the room shifts, a relevant story can bring focus back, lighten the atmosphere, or reinforce a key point without sounding repetitive. It becomes a flexible tool that supports both structure and spontaneity.

Public speaking, at its best, is about connection. It is about ensuring that your message is not only heard but understood and remembered. Storytelling makes that possible by adding a human layer to every idea you share.

When you learn to tell stories effectively, you do more than deliver a speech. You create an experience that stays with people long after the applause fades.
    `,
    author: "Angel",
    date: "2026-04-12",
    category: "Public Speaking",
    readTime: "6 min read",
    tags: [
      "Storytelling",
      "Public Speaking",
      "Communication",
      "Presentation Skills",
    ],
  },

  "movie-nights-community": {
    id: 5,
    slug: "movie-nights-community",
    title: "How Movie Nights Build Stronger Communities",
    excerpt:
      "Not every meaningful connection begins with a deep conversation. Sometimes, it starts with people gathering in the same space, sharing a screen, and experiencing a story together.",
    content: `
Not every meaningful connection begins with a deep conversation. Sometimes, it starts with something as simple as people gathering in the same space, sharing a screen, and experiencing a story together.

In a time where digital interactions often replace physical presence, communities are craving moments that feel real, unfiltered, and shared. Movie nights offer exactly that. They create an environment where people can come together without pressure, without expectations, and simply enjoy being part of something collective.

## A Shared Emotional Journey

At the heart of every movie night is a shared experience. As the story unfolds on screen, laughter, suspense, and emotion ripple through the audience at the same time. Strangers react together, friends exchange glances, and for a couple of hours, individual lives intersect in a meaningful way. This shared emotional journey creates a subtle but powerful sense of belonging.

What makes movie nights particularly effective in building community is their accessibility. Unlike formal events that may require preparation or social effort, movie nights are easy to attend and easy to enjoy. There is comfort in knowing that the focus is not on performance or participation, but on presence. People can show up as they are, and that alone lowers barriers and encourages inclusivity.

## Conversations That Follow

Conversations that follow often carry the real impact. A comment about a character, a debate about an ending, or even a shared laugh over a memorable scene can spark interactions that might not have happened otherwise. These small exchanges gradually build familiarity, turning acquaintances into friends and groups into communities.

Movie nights also create consistency, which is essential for strong communities. When held regularly, they become something people look forward to, a rhythm that brings individuals together again and again. Over time, this consistency builds trust and strengthens relationships, as faces become familiar and connections deepen naturally.

## Storytelling in a Communal Setting

There is also something powerful about storytelling in a communal setting. Films reflect real life in ways that are both entertaining and thought provoking. They open the door to conversations about values, experiences, and perspectives without making it feel forced. In this way, movie nights become more than entertainment. They become a platform for understanding and connection.

For organizers, the simplicity of a movie night is part of its strength. It does not require elaborate planning to be effective. What matters is the intention behind it, creating a welcoming space, choosing films that resonate with the audience, and ensuring that everyone feels included. The impact lies in the experience, not the complexity.

## Building Bonds Beyond the Screen

In corporate environments, social groups, or neighborhood settings, movie nights can play a significant role in strengthening bonds. They break down formal barriers, encourage interaction, and create shared memories that people carry beyond the event itself. These moments, though simple, contribute to a deeper sense of unity.

Strong communities are not built through grand gestures alone. They are formed through consistent, shared experiences that bring people closer over time. Movie nights, with their ease and emotional connection, offer exactly that.

When people gather to watch a story, they often leave with stories of their own, conversations started, friendships formed, and a stronger sense of belonging that extends far beyond the screen.

*Want to experience this for yourself? [Join Movie Date with Angel](/movie-date).*
    `,
    author: "Angel",
    date: "2026-04-12",
    category: "Community",
    readTime: "5 min read",
    tags: ["Community Building", "Movie Nights", "Social Connection", "Events"],
  },
  "movie-date-with-angel-story": {
    id: 7,
    slug: "movie-date-with-angel-story",
    title: "From Movie Nights to a Movement: The Story Behind Movie Date with Angel",
    excerpt:
      "Some of the most defining lessons in life are not learned in classrooms or boardrooms. They are formed in quiet, ordinary moments that later reveal their significance.",
    content: `
Some of the most defining lessons in life are not learned in classrooms or boardrooms. They are formed in quiet, ordinary moments that later reveal their significance.

## A Bond Built Between Films

Growing up, I shared a unique bond with my mum, one that was built during school holidays when we would stay up all night watching movies together. For many, movies are simply a way to pass time, but for her, they were always something more. After every film, she would turn to me and ask a simple yet profound question, What did you learn from that movie?

That question changed everything.

Over time, I stopped watching movies passively. I began to see them as powerful tools that teach, inspire, inform, and communicate. Every film carried meaning, and I learned to look for it.

## Returning to the Memory

Years after she passed, I found myself returning to those memories with a deep sense of gratitude and reflection. As I observed how people engaged with films around me, I noticed a gap. Many were watching purely for entertainment, often missing the depth and insight that stories can offer. It stirred something in me, a desire to create a space where movies could once again be experienced with intention.

I started small by sharing movie recommendations and reflections on my Facebook page. What began as a simple expression gradually grew into something more. People started tagging me, asking for reviews, and seeking my thoughts on different films. It became clear that this was not just a personal passion. It was something that resonated with others.

That was the beginning of Movie Date with Angel.

## From Online to In Person

As the online community expanded, I created a WhatsApp group to bring people closer. Conversations became more engaging, and connections started to form. Before long, members suggested that we meet in person, especially since I was the common link between many of them. We organized a small meet and greet, and in that gathering, the idea of monthly movie sessions was born.

From the very beginning, it was important that these sessions offered more than just a shared viewing experience. We introduced post movie reflections, creating space to pause, unpack, and draw life lessons from the stories we watched. It was never just about the film. It was about what the film left behind in each of us.

That vision has remained at the core of everything we do.

## The Heart of Edutainment

We believe in edutainment, a blend of entertainment and education that encourages people to think, learn, and grow. Movies carry messages that can shape perspectives and transform lives when we take the time to reflect on them.

In May 2025, we celebrated two years of this journey. It felt like the right moment to take a bold step forward. With the support of a few friends, we decided to extend this experience beyond our community and into schools. Two of them helped connect us to several institutions, and Ushirika became the first to open its doors to us. They even gave us a date.

At the time, we did not have screening equipment, but that did not stop us.

I shared the vision with a few committed members, and they showed up in the most generous way, offering resources, time, and unwavering support. What could have been a limitation became a testament to the power of community.

## A Vision Come to Life

Our first school event took place, and it was everything we had hoped for and more.

We watched together. We reflected together. We listened as students shared what the story meant to them, in their own words and from their own perspectives.

In that moment, the vision came to life in a way that words cannot fully capture.

This is no longer just about watching movies. It is about sparking light in places that need it. It is about changing how people experience stories and giving voice to the lessons hidden within them. It is about creating impact, one film at a time.

## Join the Movement

If you know a school, youth group, or community that would benefit from this experience, we would love to connect.

If this vision speaks to you and you would like to partner with us or support our journey, we welcome you to be part of it.

Mention us to your networks. Invite us into your spaces. And together, let us touch hearts, shape minds, and transform lives through the power of film.

*Ready to be part of the movement? [Explore Movie Date with Angel](/movie-date).*
    `,
    author: "Angel",
    date: "2026-04-12",
    category: "Community",
    readTime: "8 min read",
    tags: ["Movie Date with Angel", "Edutainment", "Community", "Storytelling", "Impact"],
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

    // H2 - skip (no subtopic headings shown)
    if (trimmedLine.startsWith("## ")) {
      continue;
    }

    // H3 - skip (no subtopic headings shown)
    if (trimmedLine.startsWith("### ")) {
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
