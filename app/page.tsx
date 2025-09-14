import Layout from './components/Layout';
import { getHomeData } from '../lib/home';

export default async function Home() {
  const homeData = await getHomeData();

  console.log(JSON.stringify(homeData));
  if (!homeData) {
    return (
      <Layout>
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome</h1>
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
          dangerouslySetInnerHTML={{ __html: homeData.contentHtml }}
        />
      </div>
    </Layout>
  );
}
