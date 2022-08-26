import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./css/sb-admin-2.css";
import Users from "./components/Users";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Product from "./components/Product";
function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                <Route path="/user" element={<Users></Users>} />
                <Route path="/product" element={<Product></Product>} />
                <Route
                  path="/create-user"
                  element={<CreateUser></CreateUser>}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
