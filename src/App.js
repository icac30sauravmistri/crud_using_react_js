import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
// import Products from "./admin/Products";
// import ProductCreate from "./admin/ProductCreate";
// import ProductEdit from "./admin/ProductEdit";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
