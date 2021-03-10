import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Welcome to my site!</span>
        </h1>
    </div>
  );
};
