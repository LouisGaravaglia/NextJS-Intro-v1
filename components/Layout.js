import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
            <h3>Hello, I'm Layout</h3>
                <Header />
                {children}
            </main>
        </div>
    </>
  )
}
