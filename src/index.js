import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import allReducers from './reducers/allReducers';


const allStoreEnhancers = compose(applyMiddleware(thunk),
window.devToolsExtension && window.devToolsExtension()
);

// step 1st create store
const store= createStore(allReducers,
    {},
    allStoreEnhancers
)

//step 2 pass store in provider to app so 
//the store will be available to all the App components 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
