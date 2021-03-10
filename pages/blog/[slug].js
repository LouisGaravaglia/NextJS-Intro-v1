import React from "react";
import Head from 'next/head'
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

export default function Post({htmlString, data}) {
    console.log("data: ", data);

  return (
    <div>

        <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
        </Head>

    <h1>CONTENTS BELOW</h1>
        <div dangerouslySetInnerHTML={{__html: htmlString}} />
    </div>
  )
}

//STATIC GENERATION METHOD FOR RENDERING HTML PAGES IN ADVANCE AT BUILD TIME
export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts")
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }));
    console.log(files);
    console.log("paths ", paths);
  
    return {
        paths,
        fallback: false
    };
};

//STATIC GENERATION METHOD FOR SENDING DATA FROM BACKEND TO COMPONENTS AT BUILD TIME
export const getStaticProps = async ({params: {slug}}) => {
    const markdownWithMetaData = fs.readFileSync(path.join("posts", slug + ".md")).toString();
    const parsedMarkdown = await matter(markdownWithMetaData);
    const htmlString = marked(parsedMarkdown.content);

    return {
       props: {
           htmlString,
           data: parsedMarkdown.data

       }
    };
};
  