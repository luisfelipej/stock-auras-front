import React, { Component } from 'react';
import ProductoForm from './ProductoForm';
import ProductoList from './ProductoList';

export default class Productos extends Component{
    render(){
        const { productos, addProducto, deleteProducto } = this.props;
        return(
            <div>
                {/* <ProductoForm onSubmit={addProducto} /> */}
                <ProductoList
                    productos={productos}
                    deleteProducto={deleteProducto}
                />
            </div>
        )
    }
}