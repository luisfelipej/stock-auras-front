import React, { Component } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';

const styles = {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: '#fff',
    },
  };

export default class CategoriaList extends Component{
    state = {
        value: 0
    }
    handleChange = (event, value) => {
        this.setState({ value })
    }
    handleClick = nombre => () => {
        const { selectCategoria } = this.props;
        selectCategoria(nombre);
    }
    render(){
        const { categorias } = this.props;
        const { value } = this.state;
        return(
            <div style={styles.root}>
                {/* <AppBar position="static" color="inherit"> */}
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        scrollable
                        fullWidth
                        scrollButtons="on"
                    >
                        {(categorias)?
                            categorias.map(categoria =>
                                <Tab onClick={this.handleClick(categoria.nombre)} key={categoria._id} label={categoria.nombre} />
                            )
                            :
                            <span>Cargando...</span>

                        }
                    </Tabs>
                {/* </AppBar> */}
            </div>
        )
    }
}
