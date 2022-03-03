import './Header.css';
import logo from '../images/pala-logo.png';
import arrowdown from '../images/arrow-down-sign-to-navigate.png';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar className="header-nav" bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto"></Nav>
                        <Nav class="Table-column">
                            <Nav.Link href="#home" className="Table-cell-div links">
                                <span className="link-text">Developers</span> &nbsp;
                            </Nav.Link>
                            <Nav.Link href="#home" className="Table-cell-div links">
                                <span className="link-text">Soluções Cloud</span> &nbsp;<img src={arrowdown} className="Arrow-down" alt="logo" />
                            </Nav.Link>
                            <Nav.Link href="#link" className="Table-cell-div links ">
                                <span className="link-text">Empresa </span> &nbsp;<img src={arrowdown} className="Arrow-down" alt="logo" />
                            </Nav.Link>
                            <Nav.Link className="Table-cell-div">
                                <button className="Contact-buttom link-text">Contato</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;