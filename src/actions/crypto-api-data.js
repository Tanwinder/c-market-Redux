export const CRYPTO_DATA = 'crypto:cryptodata';

const showData = (result) => {
    return {
        type: CRYPTO_DATA,
        payload: {
            data: result
        }
    }
}

// step create actions
const fetchData = (url) => {
    return (dispatch) => {
        fetch(url)
        .then(res => res.json())
        .then((result) => {
            dispatch(showData(result));// dispatch action
        })
    }
}
export default fetchData;