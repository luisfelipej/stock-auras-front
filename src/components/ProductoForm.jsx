import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class ProductoForm extends Component{
    render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit}>
                <Field name="categoria" component="input" placeholder="Categoria del producto" />
                <Field name="nombre" component="input" placeholder="Nombre del producto" />
                <Field name="precio" component="input" placeholder="Precio del prodcuto" />
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'productos'
})(ProductoForm);