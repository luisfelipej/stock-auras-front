import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from './API';
import {addCategoria, selectCategoria} from './reducers/Categorias';
import {addProducto, deleteProducto} from './reducers/Productos'
import { reset } from 'redux-form';
import { Button, Grid, Card, CardContent, Dialog, DialogTitle } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import './App.css';

import Categorias from './components/Categorias';
import Productos from './components/Productos';

const styles = {
  button: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  root: {
    position: 'relative',
    padding: '20px'
  }
}

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
      <div style={styles.root} >
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardContent>
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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



