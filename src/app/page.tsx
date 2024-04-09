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
        <p className="text-sm text-black">
          I am a machine learning consultant/data scientist interested in 
          <a className="text-amber-700 font-bold italic"> improving the quality of human lives</a>
          . Particularly, I want reduce AI risks and inequality. I am also curious about rationality, behavioral economics,
          productivity, food & energy systems, and software in general.
        </p>
          
        <br></br>

        <p className="text-sm text-black">
          My background is in Industrial Engineering, but most of my   
          <a href="https://www.linkedin.com/in/mikhail-franco-planas/" className="text-blue-700 underline"> experiences </a> 
          revolve around data science and machine learning. 
          I am also a part-time associate editor for 
          <a href="https://www.deeplearningweekly.com" className="text-blue-700 underline"> Deep Learning Weekly</a>.
          I also write on 
          <a href="https://medium.com/@planasmiko" className="text-blue-700 underline"> medium </a>
          and
          <a href="https://musingsofmiko.substack.com" className="text-blue-700  underline"> substack </a>. 
        </p>
      </div>

      <p className="text-xl mt-12">Thoughts</p>
      {postPreviews}
    </div>
  )
}

export default HomePage;