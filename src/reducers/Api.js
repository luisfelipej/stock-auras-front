import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../API'

const initialState = {
    data: [],
    fetching: false,
    error: null
}
export default function reducer(state = initialState, action){
    // console.log(action)
    switch (action.type) {
        case FETCH_START:
            return{
                ...state,
                fetching: true,
            }
            
        case FETCH_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case FETCH_ERROR:
            return{
                ...state, 
                error: action.error
            }
        default:
            return state;
    }
}