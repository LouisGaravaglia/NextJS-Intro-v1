import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

export default function Layout({children}) {
  return (
    <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>

            <div className={styles.footer}>
                <div className="row">
                <div className="col-lg-7 col-sm-12">
                    <p className="footer-contents pr-5">
                    Welcome to my site. We have jokes and blog posts. What else would you want!
                    </p>
                </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <small>© My Site</small>
                </div>
            </div>

        </div>
    </>
  );
};
