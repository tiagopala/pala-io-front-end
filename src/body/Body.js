import './Body.css';
import "@fontsource/roboto-condensed";
import { Container } from 'react-bootstrap';

function Body() {
    return (
        <section className="home-section">
            <div className="description-part box">
                <Container>
                    <div className="description-title">
                        A melhor combinação entre Banking as a Service e Cloud Computing
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Body;