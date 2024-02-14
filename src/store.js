import { configureStore } from '@reduxjs/toolkit';
import reducer from './pages/Shop/reducer.jsx';

// this function creates the store and we pass our root reducer to it
export default configureStore({
  reducer: reducer,
});