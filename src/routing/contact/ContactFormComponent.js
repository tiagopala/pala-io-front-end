import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = () => {
    toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark"
    });
}

class ContactFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            email: '',
            celular: '',
            telefone: '',
            empresa: '',
            mensagem: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={0}></Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <span className="form-property-name">Nome</span>
                    </Col>
                    <Col xl={6} md={6} sm={6} className="column-form">
                        <span className="form-property-name">Sobrenome</span>
                    </Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={0}></Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <input
                            className="form-button"
                            name="nome"
                            type="text"
                            value={this.state.nome || ""}
                            onChange={this.handleChange} />
                    </Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <input
                            className="form-button"
                            name="sobrenome"
                            type="text"
                            value={this.state.sobrenome || ""}
                            onChange={this.handleChange} />
                    </Col>
                    <Col xl={4} md={3} sm={0}></Col>
                </Row>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={8} md={9} sm={12} className="column-form">
                        <span className="form-property-name">Email</span>
                    </Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={4} md={6} sm={12}>
                        <input
                            className="form-button"
                            name="email"
                            type="text"
                            value={this.state.email || ""}
                            onChange={this.handleChange} />
                    </Col>
                    <Col xl={4} md={3} sm={12}></Col>
                </Row>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={0}></Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <span className="form-property-name">Celular</span>
                    </Col>
                    <Col xl={6} md={6} sm={6} className="column-form">
                        <span className="form-property-name">Telefone</span>
                    </Col>
                    <Col xl={4} md={4} sm={0}></Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={0}></Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <input
                            className="form-button"
                            name="celular"
                            type="text"
                            value={this.state.celular || ""}
                            onChange={this.handleChange} />
                    </Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <input
                            className="form-button"
                            name="telefone"
                            type="text"
                            value={this.state.telefone || ""}
                            onChange={this.handleChange} />
                    </Col>
                    <Col xl={4} md={4} sm={0}></Col>
                </Row>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={8} md={9} sm={12} className="column-form">
                        <span className="form-property-name">Empresa</span>
                    </Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={4} md={6} sm={12}>
                        <input
                            className="form-button"
                            name="empresa"
                            type="text"
                            value={this.state.empresa || ""}
                            onChange={this.handleChange} />
                    </Col>
                    <Col xl={4} md={3} sm={12}></Col>
                </Row>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={8} md={9} sm={12}>
                        <span className="form-property-name">Mensagem</span>
                    </Col>
                    <Col xl={6} md={4} sm={12}></Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={4} md={6} sm={12}>
                        <textarea
                            className="form-button"
                            name="mensagem"
                            type="text"
                            value={this.state.mensagem || ""}
                            onChange={this.handleChange} />
                    </Col>
                    <Col xl={4} md={3} sm={12}></Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={8} md={9} sm={12} className="column-form">
                        <input className="btn send-button" type="submit" value="Enviar" onClick={notifySuccess} />
                    </Col>
                    <Col xl={6} md={4} sm={12}></Col>
                </Row>
                <ToastContainer/>
            </form>
        );
    }
}

export default ContactFormComponent;