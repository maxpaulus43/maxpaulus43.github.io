import Layout from '../components/Layout';
import { getNowData } from '../../lib/now';

export default async function Now() {
  const nowData = await getNowData();

  if (!nowData) {
    return (
      <Layout>
        <div>
          <h1 className="text-3xl font-bold mb-4">What I'm doing now</h1>
          <p>Content not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: nowData.contentHtml }}
        />
      </div>
    </Layout>
  );
}
