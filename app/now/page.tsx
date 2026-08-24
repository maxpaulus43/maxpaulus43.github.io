import Layout from '../components/Layout';
import { getNowData } from '../../lib/now';

export default async function Now() {
  const nowData = await getNowData();
  return (
    <Layout>
      <div className="page-frame now-page">
        <header className="page-intro"><p className="eyebrow">A living document</p><h1>Now</h1><p>A snapshot of what has my attention lately—work, learning, and the things in between.</p>{nowData?.lastUpdated && <time>Last amended {nowData.lastUpdated}</time>}</header>
        {nowData ? <div className="article-paper now-sheet"><div className="paper-label">Current ledger</div><div className="prose archive-prose" dangerouslySetInnerHTML={{ __html: nowData.contentHtml }} /></div> : <p>Content not found.</p>}
      </div>
    </Layout>
  );
}
