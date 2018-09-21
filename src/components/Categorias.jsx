import React, { Component } from 'react';
import CategoriaList from './CategoriaList';
import CategoriaForm from './CategoriaForm';

export default class Categorias extends Component {
    render(){
        const { categorias, addCategoria, selectCategoria } = this.props;
        return(
        <div>
            <CategoriaForm onSubmit={addCategoria} />
            <CategoriaList selectCategoria={selectCategoria} categorias={categorias} />
        </div>
        )
    }
}