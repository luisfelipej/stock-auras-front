import axios from 'axios';

export const POST_START = 'start';
export const POST_SUCCESS = 'success';
export const POST_ERROR = 'error';

const postStart = () => ({
    type: POST_START,
})

const postSuccess = () => ({
    type: POST_SUCCESS,
})

const postError = error => ({
    type: POST_ERROR,
    error
})

const URL = 'http://localhost:4001/stock';


export default payload =>
    async (dispatch, getState) =>{
        dispatch(postStart());
        axios.post(URL, { payload })
            .then(resp => dispatch(postSuccess()))
            .catch(err => dispatch(postError(err)))
    }

