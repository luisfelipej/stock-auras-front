import React, { Component } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemSecondaryAction,
    Divider,
    Button,
    Dialog
}from '@material-ui/core';
import { Spa } from '@material-ui/icons';
import ConfigDialog from './ConfigDialog';

const styles = {
    root: {
      width: '100%',
      maxHeight: '85vh',
      position: 'relative',
      overflow: 'auto'
    },
  };
  

export default class ProductoList extends Component{
    state = {
        openDialog: false
    }
    handleClick = producto => () => this.setState({openDialog: true, producto})
    render(){
        const { productos, deleteProducto } = this.props;
        const { openDialog, producto } = this.state;
        return(
            <div style={styles.root}>
                <List component="nav">
                {
                    productos.map(producto =>(
                        <div>
                            <ListItem key={producto._id} button onClick={this.handleClick(producto)}>
                                <ListItemIcon><Spa /></ListItemIcon>
                                <ListItemText primary={producto.nombre} secondary={`$ ${ producto.precio }`} />
                                <ListItemSecondaryAction>
                                    <Button onClick={()=>deleteProducto(producto._id)} >Eliminar</Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </div>
                    ))
                }
                </List>

                <Dialog open={openDialog} onClose={()=>this.setState({openDialog: false})}>
                    <ConfigDialog producto={producto} />
                </Dialog>
            </div>
        )
    }
}
