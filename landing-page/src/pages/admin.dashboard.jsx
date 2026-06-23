import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeNav, setActiveNav] = useState("dashboard");
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products/categories",
      );
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      id: "add-product",
      label: "Add Product",
      path: "/admin/add-product",
    },
    {
      id: "products",
      label: "Products",
      path: "/admin/dashboard",
    },
  ];

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 bg-zinc-900 border-r border-zinc-800 flex flex-col">
        <div className="px-6 py-7 border-b border-zinc-800">
          <h2 className="text-2xl font-black tracking-tight">
            Lubri<span className="text-red-600">Max</span>
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5 tracking-widest uppercase">
            Admin
          </p>
        </div>

        <nav className="flex-1 px-3 py-5 space-y-1">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  navigate(item.path);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-zinc-800">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-zinc-800/60 transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-black">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={() => navigate("/admin/add-product")}
            className="bg-red-600 hover:bg-red-700 transition-colors text-sm font-semibold px-5 py-2.5 rounded-lg"
          >
            + Add Product
          </button>
        </header>

        <div className="flex-1 p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <p className="text-xs text-zinc-500 uppercase tracking-widest">
                Total Products
              </p>
              <p className="text-4xl font-black mt-3 text-white">
                {products.length}
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <p className="text-xs text-zinc-500 uppercase tracking-widest">
                Categories
              </p>
              <p className="text-4xl font-black mt-3 text-white">
                {categories.length}
              </p>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-800">
              <h2 className="text-sm font-semibold text-zinc-100">Products</h2>
              <p className="text-xs text-zinc-500 mt-0.5">
                {products.length} total
              </p>
            </div>

            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th>Image</th>
                  <th className="text-left text-xs text-zinc-500 uppercase tracking-widest font-medium px-6 py-3">
                    Product
                  </th>
                  <th className="text-left text-xs text-zinc-500 uppercase tracking-widest font-medium px-6 py-3">
                    Category
                  </th>
                  <th className="text-left text-xs text-zinc-500 uppercase tracking-widest font-medium px-6 py-3">
                    Brand
                  </th>
                  <th className="text-left text-xs text-zinc-500 uppercase tracking-widest font-medium px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-16 text-center text-sm text-zinc-600"
                    >
                      No products added yet.
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr
                      key={product._id}
                      className="border-b border-zinc-800/60 hover:bg-zinc-800/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 rounded object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-200">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-400">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-400">
                        {product.brand}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              navigate(`/admin/edit-product/${product._id}`)
                            }
                            className="px-3 py-1 bg-blue-600 rounded text-sm"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(product._id)}
                            className="px-3 py-1 bg-red-600 rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
