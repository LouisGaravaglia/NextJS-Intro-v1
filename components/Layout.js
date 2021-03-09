import styles from "../styles/Layout.module.css";

export default function Layout({children}) {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h3>Hello, I'm Layout</h3>
            {children}
        </main>
    </div>
  )
}
