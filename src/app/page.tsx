import getPostMetadata from '../components/getPostMetadata';
import { log } from 'console';
import Link from 'next/link';
import { ResolvedConfigFileName } from 'typescript';


const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div key="{post}">
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-xl">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600">
        {post.subtitle}
        </p>
      <p className="text-gray-300">
        {post.date}
      </p>
    </div>
  ));

  return (
    <div>
      {postPreviews}
    </div>
  )
}

export default HomePage;