import './Body.css';
import "@fontsource/roboto-condensed";
import { Col, Container, Row } from 'react-bootstrap';

function Body() {
    return (
        <section className="home-section box">
            <div className="description-part row header">
                <Container>
                    <div className="description-title">
                        A melhor combinação entre banking e cloud computing
                    </div>
                </Container>
            </div>
            <div className="information-part row content background-image">
                <div style={{margin:'auto'}}>
                    <Container style={{marginBottom:'100px'}}>
                        <Row>
                            <Col xl={5}>
                                <h4 className="information-title">Transforme seu negócio à partir das melhores soluções entre <b>Banking</b> e <b>Cloud</b></h4>
                                <p className="information-subtitle">Oferecemos o <b>melhor da tecnologia em nuvem</b> em conjunto com a <b>expertise</b> de quem conhece o <b>mercado financeiro</b>.</p>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Body;