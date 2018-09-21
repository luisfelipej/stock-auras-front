export const FETCH_START = 'start';
export const FETCH_SUCCESS = 'success';
export const FETCH_ERROR = 'error';

const fetchStart = () => ({
    type: FETCH_START,
})

const fetchSuccess = payload => ({
    type: FETCH_SUCCESS,
    payload
})

const fetchError = error => ({
    type: FETCH_ERROR,
    error
})

const URL = 'http://localhost:4001/stock';


export default payload =>
    async (dispatch, getState) =>{
        dispatch(fetchStart());
        try {
           const result = await fetch(URL);
           const json = await result.json();
           dispatch(fetchSuccess(json)); 
        } catch (error) {
            dispatch(fetchError());
        }
    }

