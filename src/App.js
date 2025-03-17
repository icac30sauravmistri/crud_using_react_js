import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Products from "./admin/Products";
import ProductCreate from "./admin/ProductCreate";
import ProductEdit from "./admin/ProductEdit";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Main/>} />
          <Route path="/admin/products" exact element={<Products/>} />
          <Route path="/admin/products/create" exact element={<ProductCreate/>} />
          <Route path="/admin/products/:id/edit" exact element={<ProductEdit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
