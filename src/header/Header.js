import logo from './pala-logo.png';

function Header() {
    return (
        <header className="header-logo">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default Header;