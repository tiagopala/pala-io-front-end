import './Header.css';
import logo from '../images/pala-logo.png';
import arrowdown from '../images/arrow-down-sign-to-navigate.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Navbar className="header-nav" bg="white" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} className="App-logo" alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="nav-table-column">
                            {/* <Nav.Link className="table-cell-div links">
                                <span className="link-text">Developers</span> &nbsp;
                            </Nav.Link>
                            <Nav.Link className="table-cell-div links">
                                <span className="link-text">Soluções Cloud</span> &nbsp;<img src={arrowdown} className="Arrow-down" alt="logo" />
                            </Nav.Link> 
                            <Nav.Link className="table-cell-div links ">
                                <span className="link-text">Empresa </span> &nbsp;<img src={arrowdown} className="Arrow-down" alt="logo" />
                            </Nav.Link> */}
                            <Nav.Link href="/contact" as={Link} to="/contact" className="table-cell-div">
                                <span className="link-text">
                                    <button className="contact-buttom">Contato</button>
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;