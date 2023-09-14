import fs from 'fs';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
    const folder = 'src/posts/';
    // %20 is the URL equivalent of spaces
    const new_slug = slug.replaceAll("%20", " ");
    const file = `${folder}${new_slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return content;
};

const PostPage = (props: any) => {
    // Get slug from dir name's square brackets
    const slug = props.params.slug;
    const content = getPostContent(slug);

    return (
        <div className="prose lg:prose-xl">
            <Markdown>{content}</Markdown>
        </div>
    )
}


export default PostPage;