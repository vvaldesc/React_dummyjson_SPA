/* eslint-disable react/prop-types */
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <div className="w-100 border m-auto">
      <div className="horizontal">
        <p>Menu</p>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
