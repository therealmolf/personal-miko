import { log } from 'console';
import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';

// Read folder, then get
const getPostMetadata = () => {
  const folder = "src/posts";
  const files = fs.readdirSync(folder);
  // Filter returns elements of an array that meet condition
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // Applies callback func array, returns array of results
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
}

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <Link href={`/posts/${slug}`}>
      <h2>
        {slug}
      </h2>
    </Link>
  ));

  return (
    <div>
      {postPreviews}
    </div>
  )
}

export default HomePage;