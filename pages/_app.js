import '../styles/globals.css';
import Layout from "../components/Layout";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
      <script 
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
          crossorigin="anonymous"
          />
      <script 
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
          crossorigin="anonymous"
          />
      <script 
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
          crossorigin="anonymous"
          />
    </Head>
    <Layout>
  <Component {...pageProps} />

    </Layout>
</>

  )
}

export default MyApp
