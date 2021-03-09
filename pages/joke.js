import Head from 'next/head'
import Link from "next/link";

export default function Joke(props) {
    const jokes = Object.values(props)
    console.log(jokes);
  return (
    <div>
        <Head>
        <title>Joke Page</title>
        <meta name="keywords" content="web development, programming"/>
        </Head>
        {/* <p>Here is a joke: {props.jokeObj1.value}</p> */}
        {jokes.map((joke, idx)=> <p><Link href="/joke/[id]" as={`/joke/${joke.id}`}>Here is a joke:</Link> {joke.value}</p>)}
        

    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://api.chucknorris.io/jokes/random`);
    const jokeObj = await res.json();
    const res2 = await fetch(`https://api.chucknorris.io/jokes/random`);
    const jokeObj2 = await res2.json();
  
      return {
        props: {
            jokeObj1: jokeObj,
            jokeObj2: jokeObj2
        }
      }
  
  }
  