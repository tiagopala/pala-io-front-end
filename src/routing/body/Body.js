import './Body.css';
import "@fontsource/roboto-condensed";
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../images/background-home.png'

function Body() {
    return (
        <section className="home-section box">
            <div className="description-part row header">
                <Container>
                    <div className="description-title">A melhor combinação entre banking e cloud computing</div>
                </Container>
            </div>
            <div className="information-part row content table-column">
                <div style={{margin:'auto'}} className="table-cell-div">
                    <Container>
                        <Row className="table-column information-row">
                            <Col className="information-col table-cell-div" xl={6} md={6} sm={12}> 
                                <h4 className="information-title">Transforme seu negócio à partir das melhores soluções entre <b>banking</b> e <b>cloud computing</b></h4>
                                <p className="information-subtitle">Oferecemos o <b>melhor da tecnologia em nuvem</b> em conjunto com a <b>expertise</b> de quem conhece o <b>mercado financeiro</b>.</p>
                            </Col>
                            <Col className="image-column">
                                <img src={image} className="information-image"></img>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Body;