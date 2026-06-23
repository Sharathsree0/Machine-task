import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api.js";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("LubriMax");

  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({ image: "" });
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${API_URL}/api/products`,
        {
          name,
          description,
          category,
          brand,
          image: formData.image,

          variations: [
            {
              size,
              price: Number(price),
              stock: Number(stock),
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (file) => {
    const token = localStorage.getItem("token");

    const data = new FormData();

    data.append("image", file);

    const res = await axios.post(`${API_URL}/api/upload`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setFormData((prev) => ({
      ...prev,
      image: res.data.imageUrl,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Add Product</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Information */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-5">Product Information</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 outline-none"
              />

              <textarea
                placeholder="Description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 outline-none"
              />
            </div>
          </div>

          {/* Image Upload */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-5">Product Image</h2>

            <input
              type="file"
              onChange={async (e) => {
                const file = e.target.files[0];

                setImage(file);

                await uploadImage(file);
              }}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3"
            />
          </div>
          {formData.image && (
            <img
              src={formData.image}
              alt="preview"
              className="w-40 mt-4 rounded-lg"
            />
          )}

          {/* Product Variation */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-5">Product Variation</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Size (1L, 5L...)"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 outline-none"
              />

              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 outline-none"
              />

              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
