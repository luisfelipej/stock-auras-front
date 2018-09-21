import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class CategoriaForm extends Component{
    render(){
        const { handleSubmit } = this.props;
        return(
        <form onSubmit={handleSubmit} >
            <Field name="name" component="input" placeholder="Nombre de la categoria" />
        </form>
        )
    }
}

export default reduxForm({
    form: 'categorias'
})(CategoriaForm);