import PostPreview from '@/components/PostPreview';
import getPostMetadata from '../components/getPostMetadata';
import { log } from 'console';
import Link from 'next/link';
import { ResolvedConfigFileName } from 'typescript';
import { propagateServerField } from 'next/dist/server/lib/render-server';


const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <p className="text-2xl mt-14">Thoughts</p>
      {postPreviews}
    </div>
  )
}

export default HomePage;