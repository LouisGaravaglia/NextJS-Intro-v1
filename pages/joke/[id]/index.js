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

//getProps and Paths calls are only rendered on server side, so you don't have to worry about running querys
//because the code wont be sent to the client side.
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://api.chucknorris.io/jokes/${context.params.id}`);
    const jokeObj = await res.json();

    return {
        props: {
            jokeObj
        }
    }
}


//THIS IS FASTER BECAUSE IT'S GENERATED AT BUILD TIME
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://api.chucknorris.io/jokes/${context.params.id}`);
//     const jokeObj = await res.json();

//     return {
//         props: {
//             jokeObj
//         }
//     }
// }

// export const getStaticPaths = async (context) => {
//     const res = await fetch(`https://api.chucknorris.io/jokes/${context.params.id}`);
//     const jokeObj = await res.json();

//     return {
//         props: {
//             jokeObj
//         }
//     }
// }