import './Body.css';
import "@fontsource/roboto-condensed";
import { Col, Container, Row } from 'react-bootstrap';

function Body() {
    return (
        <section className="home-section box">
            <div className="description-part row header">
                <Container>
                    <div className="description-title">
                        A melhor combinação entre Banking as a Service e Cloud Computing
                    </div>
                </Container>
            </div>
            <div className="information-part row content">
                <Container>
                    <p>1</p>
                </Container>
            </div>
        </section>
    );
}

export default Body;