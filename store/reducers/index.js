import {combineReducers} from 'redux';
//import {reducer as formReducer} from 'redux-form';

import favoriteReducer from './favoriteReducer';
//import user from './user'

//combines all reducers and exports them
const rootReducer = () => (
  combineReducers({
    favoriteReducer,
    //user,
    //form:formReducer,
  })
);

export default rootReducer;
