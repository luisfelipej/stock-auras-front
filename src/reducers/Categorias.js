import axios from 'axios';
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../API';
import { URL} from './Productos';
const ADD_CATEGORIA = 'categoria/add';
const SELECT_CATEGORIA = 'categoria/select';


/*
*   id,
*   nombre
*/
export const addCategoria = payload => ({
    type: ADD_CATEGORIA,
    payload
});

export const selectCategoria = payload => ({
    type: SELECT_CATEGORIA,
    payload
})

const initialState = {
    data: [],
    selected: 'Jabones terapéuticos'
}
export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_CATEGORIA:
            axios.post(`${URL}/categoria`, {nombre: action.payload.name})
            return {
                ...state,
                data: [...state.data, {_id: 'test', nombre: action.payload.name}]
            }
            case FETCH_START:
            return{
                ...state,
                fetching: true,
            }
            
            case FETCH_SUCCESS:
                return{
                    ...state,
                    data: action.payload.Categorias
                }
            case FETCH_ERROR:
                return{
                    ...state, 
                    error: action.error
                }
            case SELECT_CATEGORIA:
                return{
                    ...state,
                    selected: action.payload
                }
        default:
            return state
    }
}