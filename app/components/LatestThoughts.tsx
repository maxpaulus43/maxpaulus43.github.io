import ContentCard from './ContentCard';

export default function LatestThoughts() {
  const latestPosts = [
    {
      title: "Storytelling",
      excerpt: "Remember the last good story you heard from another person. It could be on television or in real life...",
      tags: ["storytelling", "self-help"],
      slug: "story_telling"
    },
    {
      title: "The Discovery Cycle",
      excerpt: "The Discovery Cycle is a list of things you can constantly do in order to live a more fulfilled life.",
      tags: ["psychology", "self-help"],
      slug: "discovery_cycle"
    }
  ];

  return (
    <section className="latest-thoughts-section">
      <h2>Latest Thoughts</h2>
      
      <div className="grid gap-6 my-8">
        {latestPosts.map((post) => (
          <ContentCard 
            key={post.slug}
            item={post}
            basePath="/blog"
            tagBasePath="/tag"
            tagField="tags"
            variant="blog"
          />
        ))}
      </div>

      <div className="section-cta">
        <a href="/blog" className="btn-secondary">
          <i className="fa fa-arrow-right"></i>
          Read All Posts
        </a>
      </div>
    </section>
  );
}
