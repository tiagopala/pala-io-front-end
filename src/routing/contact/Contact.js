import "@fontsource/roboto-condensed";
import './Contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import ContactFormComponent from './ContactFormComponent';

function Contact() {
    return (
        <section className="contact-section box">
            <div className="contact-part row header table-column">
                <Container className="table-cell-div">
                    <h4 className="contact-title">Fale com a <b>gente</b></h4>
                    <p className="contact-subtitle">Entre em contato com nossos especialistas para que possamos ajudá-los a atingir seus objetivos</p>
                </Container>
            </div>
            <div className="row table-column" style={{paddingTop:50}}>
                <div style={{ margin: 'auto' }} className="table-cell-div">
                    <Container>
                        <ContactFormComponent />
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Contact;