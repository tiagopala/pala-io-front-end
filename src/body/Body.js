import './Body.css';
import "@fontsource/roboto-condensed";
import { Col, Container, Row } from 'react-bootstrap';

function Body() {
    return (
        <section className="Description-section">
            <Container style={{paddingTop:104}}>
                <div className="Description-title">
                    A melhor combinação entre Banking as a Service e Cloud Computing
                </div>
            </Container>
        </section>
    );
}

export default Body;