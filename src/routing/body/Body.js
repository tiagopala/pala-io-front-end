import './Body.css';
import "@fontsource/roboto-condensed";
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../images/background-home.png'

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
            <div className="information-part row content Table-column">
                <div style={{margin:'auto'}} className="Table-cell-div">
                    <Container className="information-container">
                        <Row style={{display:'table-cell',verticalAlign:'middle'}} className="Table-column">
                            <Col className="information-col Table-cell-div" xl={6} md={6} sm={12}> 
                                <h4 className="information-title">Transforme seu negócio à partir das melhores soluções entre <b>Banking</b> e <b>Cloud</b></h4>
                                <p className="information-subtitle">Oferecemos o <b>melhor da tecnologia em nuvem</b> em conjunto com a <b>expertise</b> de quem conhece o <b>mercado financeiro</b>.</p>
                            </Col>
                            <Col>
                                <img src={image} style={{objectFit:'contain',width:'100%',height:'100%'}}></img>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Body;