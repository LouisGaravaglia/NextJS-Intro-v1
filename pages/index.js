import Head from 'next/head';
import Link from "next/link";

export default function Home() {

  return (
    <div>
    <Head>
      <title>Home Page</title>
      <meta name="keywords" content="web development, programming"/>
    </Head>
      <h1>Want to see a joke?</h1>

      <Link href="/joke">Click here</Link>
    </div>
  )
};

