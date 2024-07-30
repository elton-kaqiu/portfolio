import './Nav.scss'
export const Nav = () => {
    return (
        <nav className="navbar">
            <h1>Elton Kaqiu</h1>
            <ul className="nav-links">
                <li>
                    <a href="https://linkedin.com/in/elton-kaqiu-5861421a1" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/eltonkaciuu" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/elton-kaqiu" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};