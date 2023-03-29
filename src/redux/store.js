// import { configureStore  } from "reduxjs/toolkit";
// import { configureStore } from 'redux/toolkit'
// import rootReducers from "./reducer";

// const store = configureStore({ reducer: rootReducers })

// export default store;



import { configureStore } from '@reduxjs/toolkit'
import handleCart from './reducer/handleCart'
export default configureStore({
  reducer: {
    handleCart
  },
})