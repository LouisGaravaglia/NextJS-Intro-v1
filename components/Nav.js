import Link from "next/link";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
        <a routerLink="/" class="navbar-brand"><Link className="nav-link" href="/">HOME</Link></a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
                <span className="nav-link"><Link className="nav-link" href="/blog">Blog</Link></span>
            </li>
            <li class="nav-item">
                <span className="nav-link"><Link className="nav-link" href="/jokes">Jokes</Link></span>
            </li>
            </ul>
        </div>
        </div>
    </nav>
  );
};
