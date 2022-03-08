import { Col, Container, Row } from 'react-bootstrap';
import "@fontsource/roboto-condensed";
import './Contact.css';
import image from '../../images/background-home.png'

function Contact() {
    return (
        <section className="contact-section box">
            <div className="row content table-column">
                <div style={{ margin: 'auto' }} className="table-cell-div">
                    <Container>
                        <h4 className="information-title">Fale com a <b>gente</b></h4>
                        <p className="information-subtitle">Entre em contato com nossos especialistas para que possamos ajudá-los a atingir seus objetivos</p>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Contact;