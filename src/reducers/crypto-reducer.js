import { CRYPTO_DATA, IS_LOADING } from '../actions/crypto-api-data';

//step 4 create reducers
export function cryptoReducer(state = [], action){
    switch(action.type){
        case CRYPTO_DATA:
            return action.payload.data;
        default:
            return state;
    }
}

export function cryptoLoading(state = [], action){
    switch(action.type){
        case IS_LOADING:
            return action.payload.isloading;
        default:
            return state;
    }
}
