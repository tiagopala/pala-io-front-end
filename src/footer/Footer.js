import './Footer.css';
import "@fontsource/roboto-condensed";
import { Container } from 'react-bootstrap';
import logo from '../images/pala-logo-black.png';

function Footer() {
    return (
        <footer className="row footer">
            <Container>
                <div className="footer-description">
                    &copy;&nbsp;<img src={logo} className="footer-logo"></img>&nbsp;<span>-&nbsp; Todos os direitos reservados.</span>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;