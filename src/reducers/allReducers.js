import { combineReducers } from 'redux';
import {cryptoReducer, cryptoLoading} from './crypto-reducer';

// 3rd step create all reducers and add reducers in it
const allreducers = combineReducers({
    crypto: cryptoReducer,
    loading: cryptoLoading
});

export default allreducers;
