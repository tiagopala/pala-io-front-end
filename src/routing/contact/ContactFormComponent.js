import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ContactFormComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {
                nome: '',
                sobrenome: '',
                email: '',
                celular: '',
                telefone: '',
                empresa: '',
                mensagem: ''
            },
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, fieldName) {
        let fields = this.state.fields;
        fields[field] = fieldName.target.value;
        this.setState({ fields });
    }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["nome"]) {
            formIsValid = false;
            errors["nome"] = "Nome deve ser informado.";
        }

        if (!fields["sobrenome"]) {
            formIsValid = false;
            errors["sobrenome"] = "Sobrenome deve ser informado.";
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email deve ser informado.";
        }
        
        if (!fields["celular"]) {
            formIsValid = false;
            errors["celular"] = "Celular deve ser informado.";
        }
        
        if (!fields["empresa"]) {
            formIsValid = false;
            errors["empresa"] = "Empresa deve ser informado.";
        }
        
        if (!fields["mensagem"]) {
            formIsValid = false;
            errors["mensagem"] = "Mensagem deve ser informado.";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    clearForm = () => {
        let fields = this.state.fields;
        fields["nome"] = '';
        fields["sobrenome"] = '';
        fields["email"] = '';
        fields["celular"] = '';
        fields["telefone"] = '';
        fields["empresa"] = '';
        fields["mensagem"] = '';
    }

    notifySuccess = () => {
        toast.success("Recebemos sua mensagem. Um de nossos especialistas irá entrar em contato em breve!", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        var validationResult = this.handleValidation();

        if (validationResult) {
            this.clearForm();
            this.notifySuccess();
        }

        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={0}></Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <span className="form-property-name">Nome</span><span className="required-field">*</span>
                    </Col>
                    <Col xl={6} md={6} sm={6} className="column-form">
                        <span className="form-property-name">Sobrenome</span><span className="required-field">*</span>
                    </Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={0}></Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <input
                            className="form-button"
                            name="nome"
                            type="text"
                            value={this.state.fields["nome"] || ""}
                            onChange={this.handleChange.bind(this, "nome")} />
                        <span style={{ color: "red" }}>{this.state.errors["nome"]}</span>
                    </Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <input
                            className="form-button"
                            name="sobrenome"
                            type="text"
                            value={this.state.fields["sobrenome"] || ""}
                            onChange={this.handleChange.bind(this, "sobrenome")} />
                        <span style={{ color: "red" }}>{this.state.errors["sobrenome"]}</span>
                    </Col>
                    <Col xl={4} md={3} sm={0}></Col>
                </Row>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={8} md={9} sm={12} className="column-form">
                        <span className="form-property-name">Email</span><span className="required-field">*</span>
                    </Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={4} md={6} sm={12}>
                        <input
                            className="form-button"
                            name="email"
                            type="text"
                            value={this.state.fields["email"] || ""}
                            onChange={this.handleChange.bind(this, "email")} />
                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                    </Col>
                    <Col xl={4} md={3} sm={12}></Col>
                </Row>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={0}></Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <span className="form-property-name">Celular</span><span className="required-field">*</span>
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
                            value={this.state.fields["celular"] || ""}
                            onChange={this.handleChange.bind(this, "celular")} />
                            <span style={{ color: "red" }}>{this.state.errors["celular"]}</span>
                    </Col>
                    <Col xl={2} md={3} sm={6} className="column-form">
                        <input
                            className="form-button"
                            name="telefone"
                            type="text"
                            value={this.state.fields["telefone"] || ""}
                            onChange={this.handleChange.bind(this, "telefone")} />
                    </Col>
                    <Col xl={4} md={4} sm={0}></Col>
                </Row>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={8} md={9} sm={12} className="column-form">
                        <span className="form-property-name">Empresa</span><span className="required-field">*</span>
                    </Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={4} md={6} sm={12}>
                        <input
                            className="form-button"
                            name="empresa"
                            type="text"
                            value={this.state.fields["empresa"] || ""}
                            onChange={this.handleChange.bind(this, "empresa")} />
                            <span style={{ color: "red" }}>{this.state.errors["empresa"]}</span>
                    </Col>
                    <Col xl={4} md={3} sm={12}></Col>
                </Row>
                <Row className="form-row">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={8} md={9} sm={12}>
                        <span className="form-property-name">Mensagem</span><span className="required-field">*</span>
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
                            value={this.state.fields["mensagem"] || ""}
                            onChange={this.handleChange.bind(this, "mensagem")} />
                            <span style={{ color: "red" }}>{this.state.errors["mensagem"]}</span>
                    </Col>
                    <Col xl={4} md={3} sm={12}></Col>
                </Row>
                <Row className="form-row-entry">
                    <Col xl={4} md={3} sm={12}></Col>
                    <Col xl={8} md={9} sm={12} className="column-form">
                        <input className="btn send-button" type="submit" value="Enviar" />
                    </Col>
                    <Col xl={6} md={4} sm={12}></Col>
                </Row>
                <ToastContainer />
            </form>
        );
    }
}

export default ContactFormComponent;