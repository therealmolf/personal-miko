import { log } from 'console';
import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import { ResolvedConfigFileName } from 'typescript';
import { PostMetadata } from './components/PostMetadata';

// Read folder, then get
const getPostMetadata = (): PostMetadata[] => {
  const folder = "src/posts";
  const files = fs.readdirSync(folder);
  // Filter returns elements of an array that meet condition
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
  // Using gray-matter to take front matter from mds
  const posts = markdownPosts.map((fileName) => {
    const file = fileName.replaceAll("%20", " ");
    const fileContents = fs.readFileSync(`${folder}/${file}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", "")
    };
  },);

  return posts;
}

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