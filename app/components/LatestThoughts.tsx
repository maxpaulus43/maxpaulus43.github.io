export default function LatestThoughts() {
  const latestPosts = [
    {
      title: "Storytelling",
      excerpt: "Remember the last good story you heard from another person. It could be on television or in real life...",
      tags: ["storytelling", "self-help"]
    },
    {
      title: "The Discovery Cycle",
      excerpt: "The Discovery Cycle is a list of things you can constantly do in order to live a more fulfilled life.",
      tags: ["psychology", "self-help"]
    }
  ];

  return (
    <section className="latest-thoughts-section">
      <h2>Latest Thoughts</h2>
      
      <div className="blog-preview">
        {latestPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="blog-meta">
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
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
