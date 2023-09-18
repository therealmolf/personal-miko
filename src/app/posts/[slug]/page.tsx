import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';

const getPostContent = (slug: string) => {
    const folder = 'src/posts/';
    // %20 is the URL equivalent of spaces
    const new_slug = slug.replaceAll("%20", " ");
    const file = `${folder}${new_slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);

    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => {
        slug: post.slug
    });
}; 

const PostPage = (props: any) => {
    // Get slug from dir name's square brackets
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <div>
            <div className="my-7">
                <h3 className="text-xl text-white">
                    {post.data.title}
                </h3>
            </div>
            <article className="prose dark:prose-invert">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
}


export default PostPage;