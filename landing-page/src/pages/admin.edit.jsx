import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/api.js";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/products/${id}`
      );

      const product = res.data.data;

      setName(product.name);
      setDescription(product.description);
      setCategory(product.category);
      setBrand(product.brand);
      setImage(product.image);

      if (product.variations?.length > 0) {
        setSize(product.variations[0].size);
        setPrice(product.variations[0].price);
        setStock(product.variations[0].stock);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (file) => {
    try {
      const token = localStorage.getItem("token");

      const data = new FormData();
      data.append("image", file);

      const res = await axios.post(
        `${API_URL}/api/upload`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setImage(res.data.imageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API_URL}/api/products/${id}`,
        {
          name,
          description,
          category,
          brand,
          image,
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
        }
      );

      alert("Product Updated Successfully");

      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Edit Product
        </h1>

        <form onSubmit={handleUpdate} className="space-y-8">

          {/* Product Information */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-5">
              Product Information
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3"
              />

              <textarea
                rows="4"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3"
              />
            </div>
          </div>

          {/* Image */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-5">
              Product Image
            </h2>

            {image && (
              <img
                src={image}
                alt="preview"
                className="w-40 h-40 object-cover rounded-lg mb-4"
              />
            )}

            <input
              type="file"
              onChange={(e) =>
                uploadImage(e.target.files[0])
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3"
            />
          </div>

          {/* Variation */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-5">
              Product Variation
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <input
                type="text"
                placeholder="Size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-3"
              />

              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-3"
              />

              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-3"
              />

            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Update Product
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditProduct;