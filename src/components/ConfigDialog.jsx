import React, { Component } from 'react';
import ProductoForm from './ProductoForm';


const styles = {
    height: '300px',
    width: '300px',
    padding: '30px'
}

export default class ConfigDialog extends Component{
    render(){
        const { producto } = this.props;
        return(
            <div style={styles}>
                <h4>{producto.nombre}</h4>
                <ProductoForm categoria={producto.categoria} nombre={producto.nombre} precio={producto.precio} />
            </div>
        )
    }
}