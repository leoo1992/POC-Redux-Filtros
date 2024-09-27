import React from "react";
import Products from "./Components/Products/Products";
import Filters from "./Components/Filters/Filters";
// import {  } from "./redux/stores/";
// import { useDispatch } from "react-redux";

function App() {
  return (
    <section>
      <Filters />
      <Products />
    </section>
  );
}

export default App;
