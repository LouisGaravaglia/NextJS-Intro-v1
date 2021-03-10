import Head from 'next/head';
import Link from "next/link";
import fs from "fs";
import Header from "../components/Header";

export default function Home({slugs}) {

  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="keywords" content="web development, programming"/>
      </Head>
      <Header />
    </div>
  )
};

//STATIC GENERATION METHOD FOR SENDING DATA FROM BACKEND TO COMPONENTS AT BUILD TIME
export const getStaticProps = async () => {
  const files = fs.readdirSync("posts")

  return {
     props: {
       slugs: files.map(filename => filename.replace(".md", ""))
     }
  };
};
