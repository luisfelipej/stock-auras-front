import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../API'
import { POST_START, POST_SUCCESS, POST_ERROR } from '../API/Post';
import axios from 'axios';
const ADD_PRODUCTO = 'producto/add';
const DELETE_PRODUCTO = 'producto/delete';

export const URL = 'http://localhost:4001/stock';

/*
*   id,
*   nombre,
*   categoria,
*   precio
*/

export const addProducto = payload => ({
    type: ADD_PRODUCTO,
    payload
});

export const deleteProducto = payload => ({
    type: DELETE_PRODUCTO,
    payload
})

const initialState = {
    data: [],
    fetching: false,
    error: null
}
export default  function reducer(state = initialState, action){
    switch(action.type){
        case ADD_PRODUCTO:
            axios.post(URL, action.payload)
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case FETCH_START:
            return{
                ...state,
                fetching: true,
            }
            
        case FETCH_SUCCESS:
                return{
                    ...state,
                    data: action.payload.Productos
                }
        case FETCH_ERROR:
                return{
                    ...state, 
                    error: action.error
                }
        case DELETE_PRODUCTO:
                axios.delete(`${URL}/${action.payload}`)
                return state
            default:
                return state
    }
}