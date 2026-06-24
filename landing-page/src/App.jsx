import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import AdminLogin from "./pages/admin.login.jsx";
import Dashboard from "./pages/admin.dashboard.jsx";
import AddProduct from "./pages/Admin.add.jsx";
import EditProduct from "./pages/admin.edit.jsx"
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

      <Route path="/admin/add-product" element={<PrivateRoute><AddProduct /></PrivateRoute> } />

      <Route path="/admin/edit-product/:id" element={<PrivateRoute><EditProduct /></PrivateRoute> } />
      
      <Route  path="/product/:id"  element={<ProductDetails />}/>
      
    </Routes>
  );
}

export default App;
