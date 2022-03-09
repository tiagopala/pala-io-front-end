import React from 'react';
import { Col, Row } from 'react-bootstrap';

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
                <Row>
                    <Col xl={6} md={6} sm={12}>
                        <span>Nome</span>
                    </Col>
                    <Col xl={6} md={6} sm={12}>
                        <span>Sobrenome</span>
                    </Col>                    
                </Row>
                <Row>
                    <Col xl={6} md={6} sm={12}>
                        <input
                            name="nome"
                            type="text"
                            value={this.state.nome || ""}
                            onChange={this.handleChange} />
                    </Col>
                    <Col xl={6} md={6} sm={12}>
                        <input
                            name="sobrenome"
                            type="text"
                            value={this.state.sobrenome || ""}
                            onChange={this.handleChange} />
                    </Col>
                </Row>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default ContactFormComponent;