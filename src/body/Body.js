import './Body.css';
import "@fontsource/roboto-condensed";
import { Container } from 'react-bootstrap';

function Body() {
    return (
        <div id="body">
            <section className="Description-section">
                <Container>
                    <div className="Description-title">
                        A melhor combinação entre Banking as a Service e Cloud Computing
                    </div>
                </Container>
            </section>
            <section className="Presentation-section">
                
            </section>
        </div>
    );
}

export default Body;