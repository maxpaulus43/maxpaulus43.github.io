import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="hero-section">
            <h1 className="prose-h1">Building Scalable Digital Experiences</h1>

            <p className="hero-subtitle">
                <strong>Max Paulus</strong> is a Software Developer passionate about creating enterprise-grade applications that solve real-world problems.
            </p>

            <div className="hero-image-container">
                <Image
                    src="/max_profile_3.png"
                    alt="Max Paulus Profile Picture"
                    width={200}
                    height={200}
                    className="hero-profile-image"
                />
            </div>

            <div className="hero-actions">
                <a href="/portfolio" className="btn-primary">
                    <i className="fa fa-folder-open"></i>
                    View My Work
                </a>
                <a href="mailto:maxpaulus43@gmail.com" className="btn-secondary">
                    <i className="fa fa-envelope"></i>
                    Get In Touch
                </a>
            </div>

            <div className="hero-about">
                <h2>About Me</h2>
                <p>
                    I'm a software developer with experience at leading companies like <strong>Amazon</strong> and <strong>Aerserv/InMobi</strong>.
                    I specialize in building scalable web applications using modern technologies like React, Next.js, and cloud platforms.
                </p>
                <p>
                    Currently focused on advanced React patterns, performance optimization, and building personal knowledge management systems.
                    I believe in writing clean, maintainable code that delivers exceptional user experiences.
                </p>
            </div>

            <div className="skills-preview">
                <span className="skill-tag">#react</span>
                <span className="skill-tag">#nextjs</span>
                <span className="skill-tag">#typescript</span>
                <span className="skill-tag">#aws</span>
                <span className="skill-tag">#java</span>
                <span className="skill-tag">#python</span>
            </div>
        </div>
    );
}
