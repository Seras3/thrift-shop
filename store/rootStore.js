import { combineReducers } from 'redux';

import shopReducer from './reducers/shop';

const rootStore = combineReducers({
  shop: shopReducer
});

export default rootStore;