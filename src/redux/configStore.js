import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./stores/productsStore";

const reducer = combineReducers({ products });
const store = configureStore({ reducer });

export default store;
