export default function FeaturedWork() {
  const featuredProjects = [
    {
      company: "Amazon",
      title: "Software Developer",
      description: "Built mobile shopping features for millions of users, focusing on location services and multi-factor authentication.",
      skills: ["react-native", "java", "ios", "android"]
    },
    {
      company: "Aerserv/InMobi", 
      title: "Software Developer",
      description: "First role out of college working on enterprise-level digital advertising solutions and learning full-stack development.",
      skills: ["java", "mysql", "html", "css"]
    }
  ];

  return (
    <section className="featured-work-section">
      <h2>Featured Work</h2>
      
      <div className="work-preview">
        {featuredProjects.map((project, index) => (
          <div key={index} className="work-card">
            <div className="work-header">
              <div className="company-logo">
                {project.company.charAt(0)}
              </div>
              <div>
                <h3>{project.company}</h3>
                <p>{project.title}</p>
              </div>
            </div>
            <p>{project.description}</p>
            <div className="work-tags">
              {project.skills.map((skill) => (
                <span key={skill}>#{skill}</span>
              ))}
            </div>
          </div>
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
