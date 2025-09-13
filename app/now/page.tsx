import Layout from '../components/Layout';

export default function Now() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold mb-4">What I'm doing now</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            This is a "now page" - a snapshot of what I'm currently focused on in my life and work.
          </p>
          
          <h2 className="text-2xl font-semibold mb-3">Current Projects</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Migrating my portfolio website from Gridsome/Vue to Next.js</li>
            <li>Learning advanced React patterns and performance optimization</li>
            <li>Building a personal knowledge management system</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-3">Reading</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Atomic Habits by James Clear</li>
            <li>The Pragmatic Programmer by David Thomas</li>
            <li>Various technical blogs and documentation</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-3">Learning</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Advanced TypeScript patterns</li>
            <li>System design principles</li>
            <li>Modern deployment strategies</li>
          </ul>
          
          <p className="text-sm text-gray-500 mt-8">
            Last updated: December 2024
          </p>
        </div>
      </div>
    </Layout>
  );
}
