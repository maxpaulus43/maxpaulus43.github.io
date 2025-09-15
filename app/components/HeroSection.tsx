import Image from 'next/image';

interface HeroSectionProps {
    onContactClick?: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
    return (
        <div className="text-center mb-16">
            <h1 className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-white to-cyan-400 bg-clip-text text-transparent">
                Building Solutions to Real Problems
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                <strong className="text-cyan-400 font-semibold">Max Paulus</strong> is a Software Developer passionate about solving new and novel problems in the fast-changing world of tech.
            </p>

            <div className="my-8">
                <Image
                    src="/max_profile_3.png"
                    alt="Max Paulus Profile Picture"
                    width={200}
                    height={200}
                    className="w-72 h-72 object-cover rounded-full border-4 border-gray-600 bg-black mx-auto"
                />
            </div>

            <div className="flex gap-4 my-8 flex-wrap justify-center">
                <a href="/portfolio" className="btn-primary">
                    <i className="fa fa-folder-open"></i>
                    View My Work
                </a>
                <button 
                    onClick={onContactClick}
                    className="btn-secondary"
                >
                    <i className="fa fa-envelope"></i>
                    Get In Touch
                </button>
            </div>

            <div className="text-left my-12 max-w-3xl mx-auto">
                <h2 className="text-white text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    I'm a software developer with experience at leading companies like <strong className="text-cyan-400 font-semibold">Amazon</strong> and <strong className="text-cyan-400 font-semibold">Aerserv/InMobi</strong>.
                    I specialize in building scalable web applications using modern technologies like React, Next.js, and cloud platforms.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    Currently focused on advanced React patterns, performance optimization, and building personal knowledge management systems.
                    I believe in writing clean, maintainable code that delivers exceptional user experiences.
                </p>
            </div>

            <div className="flex gap-2 my-6 flex-wrap">
                <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400">#react</span>
                <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400">#nextjs</span>
                <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400">#typescript</span>
                <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400">#aws</span>
                <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400">#java</span>
                <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400">#python</span>
            </div>
        </div>
    );
}
