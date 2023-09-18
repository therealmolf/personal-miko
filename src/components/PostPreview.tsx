import Link from "next/link";
import { PostMetadata } from "./PostMetadata";


const PostPreview = (props: PostMetadata) => {
    return <div>
        <Link href={`/posts/${props.slug}`}>
          <div className="mx-auto rounded-md border border-gray-800 p-3 my-6 hover:bg-slate-900">
            <h2 className="text-xl hover:underline">
              {props.title}
            </h2>
          <p className="text-xs text-gray-700">
            {props.date}
          </p>
          <p className="text-gray-600">
            {props.subtitle}
            </p>
          <div className="inline-block text-gray-400">
            {props.tags.map((prop) => (
              <li className="inline-block text-xs underline decoration-sky-600 text-gray-500 mr-2" key={prop}>
                #{prop}
              </li>)
            )}
          </div>
        </div>
      </Link>
    </div>
}

export default PostPreview;