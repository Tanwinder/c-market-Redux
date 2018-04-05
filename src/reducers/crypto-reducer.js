import { CRYPTO_DATA } from '../actions/crypto-api-data';

//step 4 create reducers
export default function(state = [], action){
    switch(action.type){
        case CRYPTO_DATA:
            return action.payload.data;
        default:
            return state;
    }
}