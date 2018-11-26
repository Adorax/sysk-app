// Store/configureStore.js

import {createStore, applyMiddleware, compose} from 'redux';
import toggleFavorite from './Reducers/favoriteReducer';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';

const enhancers= compose(
  applyMiddleware(thunk), //!!!! APPRENDRE CECI !!!!!
  //window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

//create redux store
const store= createStore(rootReducer(), enhancers);

export default store;
