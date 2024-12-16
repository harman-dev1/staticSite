import { getPostData } from '../lib/posts';

export default function Home({ postData }) {
  return (
    <div>
      <h1>{postData.data.title}</h1>
      <p>{postData.data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  );
}

// Fetch data server-side with getStaticProps
export async function getStaticProps() {
  const postData = getPostData(); // Call your server-side function
  return {
    props: {
      postData, // Pass data to your component
    },
  };
}
