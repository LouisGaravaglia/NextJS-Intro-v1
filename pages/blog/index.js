import Head from 'next/head';
import Link from "next/link";
import fs from "fs";

export default function BlogHome({slugs}) {

  return (
    <div>
    <Head>
      <title>Blog Page</title>
      <meta name="keywords" content="web development, programming"/>
    </Head>

      <h1>Blog Posts</h1>
      {slugs.map(slug => {
        return (
          <div key={slug}>
          <Link href={"/blog/" + slug}>{"/blog/" + slug}</Link>
          </div>
        )
      })}

    </div>
  )
};

//STATIC GENERATION METHOD FOR SENDING DATA FROM BACKEND TO COMPONENTS AT BUILD TIME
export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  return {
     props: {
       slugs: files.map(filename => filename.replace(".md", ""))
     }
  };
};
