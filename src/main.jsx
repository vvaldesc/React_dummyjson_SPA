import ReactDOM from 'react-dom/client'
import Options from "./components/Options.jsx";
import Users from "./components/Users.jsx";
import UserInfo from "./components/UserInfo.jsx";
import Products from "./components/Products.jsx";
import Product from "./components/Product.jsx";
import Layout from "./components/Layout.jsx"
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Options/>} />
        <Route path="users" element={<Users/>} >
          <Route path=":id" element={<UserInfo/>} />
        </Route>
        <Route path="products" element={<Products/>} />
        <Route path="product/:id" element={<Product/>} />
      </Route>
      <Route path="*" element={<Navigate replace to="/"/>} />
    </Routes>
  </BrowserRouter>
);
