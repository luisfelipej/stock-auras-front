import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from './API';
import {addCategoria, selectCategoria} from './reducers/Categorias';
import {addProducto, deleteProducto} from './reducers/Productos'
import { reset } from 'redux-form';
import './App.css';

import Categorias from './components/Categorias';
import Productos from './components/Productos';

class App extends Component {
  constructor(props){
    super(props);
    const { api } = props;
    api();
  }
  render() {
    const { 
      categorias,
      productos,
      addCategoria,
      selectCategoria,
      addProducto,
      deleteProducto,
      selected 
    } = this.props;
    return (
      <div className="App">
        <Categorias
          addCategoria={addCategoria}
          selectCategoria={selectCategoria}
          categorias={categorias}
        />
        <Productos
          productos={productos}
          addProducto={addProducto}
          deleteProducto={deleteProducto}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  const { Categorias: { data: categorias, selected } } = state;
  const { Productos: { data: productos } } = state;
  return {
    categorias,
    productos : productos.filter(x => x.categoria === selected),
    selected
  };
}

const mapDispatchToProps = dispatch => ({
  api: payload => dispatch(api(payload)),
  addCategoria: payload => {
    dispatch(addCategoria(payload))
    dispatch(reset('categorias'))
  },
  addProducto: payload => {
    dispatch(addProducto(payload))
    dispatch(reset('productos'))
  },
  deleteProducto: payload => dispatch(deleteProducto(payload)),
  selectCategoria: payload => dispatch(selectCategoria(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
