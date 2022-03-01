import './Header.css';
import logo from './images/pala-logo.png';
import arrowdown from './images/arrow-down-sign-to-navigate.png';
import { Col, Container, Navbar, Row, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto"></Nav>
                        <Nav class="Table-column">
                            <Nav.Link href="#home" className="Table-cell-div">
                                Soluções Cloud &nbsp;<img src={arrowdown} className="Arrow-down" alt="logo" />
                            </Nav.Link>
                            <Nav.Link href="#link" className="Table-cell-div">
                                Empresa &nbsp;<img src={arrowdown} className="Arrow-down" alt="logo" />
                            </Nav.Link>
                            <Nav.Link className="Table-cell-div">
                                <button className="Contact-buttom">Contato</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;