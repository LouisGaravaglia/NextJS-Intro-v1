import { useRouter } from "next/router";

export default function joke({jokeObj}) {
    const router = useRouter();
    const {id} = router.query;
    console.log("joke by id: ", jokeObj);

  return (
    <div>
        <p> This is supposed to be a joke with idx of {id}</p>
        <p>Joke: {jokeObj.value}</p>
        
    </div>
  )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://api.chucknorris.io/jokes/${context.params.id}`);
    const jokeObj = await res.json();

    return {
        props: {
            jokeObj
        }
    }
}