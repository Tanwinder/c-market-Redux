export const CRYPTO_DATA = 'crypto:cryptodata';
export const IS_LOADING = 'crypto:isLoading';
// export const CRYPTO_DATA = 'crypto:cryptodata';

const showData = (result) => {
    return {
        type: CRYPTO_DATA,
        payload: {
            data: result
        }
    }
}
const isLoading = (bool) => {
    return {
        type: IS_LOADING,
        payload: {
            isloading: bool
        }
    }
}

// step create actions
const fetchData = (url) => {

    return (dispatch, getState) => {

      dispatch(isLoading(true)); // dispatch loading items true

      console.log(getState());

        setTimeout(function(){
          fetch(url)
          .then(res => {
            if (res.status !== 200) {
              throw Error(res.statusText);
            }
            dispatch(isLoading(false));  // dispatch items are loaded
            return res.json();
          })
          .then((result) => {
              dispatch(showData(result));// dispatch action
          });
        },2000);

    }
}

export default fetchData;
