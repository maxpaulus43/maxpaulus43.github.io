import ContentCard from './ContentCard';

export default function FeaturedWork() {
  const featuredProjects = [
    {
      title: "Amazon",
      excerpt: "Built mobile shopping features for millions of users, focusing on location services and multi-factor authentication.",
      skills: ["react-native", "java", "ios", "android"],
      slug: "amazon"
    },
    {
      title: "Aerserv/InMobi", 
      excerpt: "First role out of college working on enterprise-level digital advertising solutions and learning full-stack development.",
      skills: ["java", "mysql", "html", "css"],
      slug: "aerserv"
    }
  ];

  return (
    <section className="featured-work-section">
      <h2>Featured Work</h2>
      
      <div className="grid gap-6 my-8">
        {featuredProjects.map((project) => (
          <ContentCard 
            key={project.slug}
            item={project}
            basePath="/portfolio"
            tagBasePath="/skill"
            tagField="skills"
            variant="portfolio"
          />
        ))}
      </div>

      <div className="section-cta">
        <a href="/portfolio" className="btn-secondary">
          <i className="fa fa-arrow-right"></i>
          View All Experience
        </a>
      </div>
    </section>
  );
}
