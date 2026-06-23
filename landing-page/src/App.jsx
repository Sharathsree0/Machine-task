import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/admin.login";
import Dashboard from "./pages/admin.dashboard";
import AddProduct from "./pages/Admin.add";
import EditProduct from "./pages/admin.edit"
import PrivateRoute from "./Components/PrivateRoute";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

      <Route path="/admin/add-product" element={<PrivateRoute><AddProduct /></PrivateRoute> } />

      <Route path="/admin/edit-product/:id" element={<PrivateRoute><EditProduct /></PrivateRoute> } />
    </Routes>
  );
}

export default App;
