import logo from './images/pala-logo.png';
import arrowdown from './images/arrow-down-sign-to-navigate.png';
import './Header.css';
import { Col, Container, Row } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <div className="App-logo-div">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </Col>
                    <Col>
                        <div className="Nav-items-div">
                            <a className="Nav-item-left">Soluções Cloud &nbsp;<img src={arrowdown} className="Arrow-down" alt="logo" /></a>
                            <a className="Nav-item-left">Empresa &nbsp;<img src={arrowdown} className="Arrow-down" alt="logo" /></a>
                            <button className="Contact-buttom">Contato</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;