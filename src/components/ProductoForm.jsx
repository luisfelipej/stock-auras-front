import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Input from './Input';

class ProductoForm extends Component{
    render(){
        const { handleSubmit, categoria, nombre, precio } = this.props;
        return(
            <form onSubmit={handleSubmit}>
                <Field name="categoria" component={Input} placeholder={categoria} />
                <Field name="nombre" component={Input} placeholder={nombre} />
                <Field name="precio" component={Input} placeholder={precio} />
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'productos'
})(ProductoForm);