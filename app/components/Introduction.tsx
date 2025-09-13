import Image from 'next/image';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="flex flex-col items-center mt-3 md:flex-row mb-3" id="introduction">
      <div className="w-64 h-64 md:w-1/3 md:mr-4 mb-4 md:mb-0">
        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center shadow-lg md:shadow-none">
          <span className="text-gray-500 text-sm">Profile Image</span>
        </div>
      </div>
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">I'm Max!</h2>
        <p className="text-base leading-relaxed">
          Hello and welcome to my website! I'll be showing off a lot of stuff here, but I'm mostly a software developer.
          This website is a place to discover a little bit more about me. If you want to see some of my work, click{' '}
          <Link href="/portfolio" className="link">
            here
          </Link>
          . I'm attempting to start a blog which you can find{' '}
          <Link href="/blog" className="link">
            here
          </Link>
          . I'll constantly be updating this website so please come back to see the new features.
          Hopefully you enjoy what I've done here.
        </p>
      </div>
    </div>
  );
}
