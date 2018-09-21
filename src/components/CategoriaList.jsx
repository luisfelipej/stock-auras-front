import React, { Component } from 'react';

const style = {
    categorias: {
        display: 'flex',
        justifyContent: 'center',
        listStyle: 'none'
    },
    categoria: {
        marginRight: '2em'
    }
}

export default class CategoriaList extends Component{
    handleClick = nombre => () => {
        const { selectCategoria } = this.props;
        selectCategoria(nombre);
    }
    render(){
        const { categorias } = this.props;
        return(
            <ul style={style.categorias}>
                {(categorias)?
                    categorias.map(categoria =>(
                        <li style={style.categoria} onClick={this.handleClick(categoria.nombre)} key={categoria._id} >{categoria.nombre}</li>
                    ))
                    :
                    <span>Cargando...</span>
                }
            </ul>
        )
    }
}