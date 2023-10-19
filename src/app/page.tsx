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
      <div className="max-w-lg">
        <p className="text-sm text-slate-500">
          Hello! I am an autodidactic data aficionado interested in 
          <a className="text-amber-600 italic"> improving the quality of human lives</a>
          . Currently, I am curious about Technical AI Safety (Mech Interp), ML Infra, Rationality,
          Productivity Tools, Resilient Food Systems, Web3, and Software in general.
        </p>
          
        <br></br>

        <p className="text-sm text-slate-500">
          My background is in Industrial Engineering, but most of my   
          <a href="https://www.linkedin.com/in/mikhail-franco-planas/" className="text-blue-600 underline"> previous experiences </a> 
          revolve around data science and machine learning. 
          I am also a part-time associate editor for 
          <a href="https://www.deeplearningweekly.com" className="text-blue-600 underline"> Deep Learning Weekly</a>.
        </p>
      </div>

      <p className="text-xl mt-12">Thoughts</p>
      {postPreviews}
    </div>
  )
}

export default HomePage;