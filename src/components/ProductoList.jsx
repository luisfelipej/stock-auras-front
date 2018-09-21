import React, { Component } from 'react';

export default class ProductoList extends Component{
    render(){
        const { productos, deleteProducto } = this.props;
        return(
            <ul>
                {
                    productos.map(producto =>(
                        <li key={producto._id} >{producto.nombre} - {producto.precio} <button onClick={()=>deleteProducto(producto._id)}>Eliminar</button></li>
                    ))
                }
            </ul>
        )
    }
}