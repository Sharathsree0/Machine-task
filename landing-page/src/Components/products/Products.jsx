import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/api.js";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/products`
      );

      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="products"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-3">
                  {product.description}
                </p>

                <button  onClick={() =>    navigate(`/product/${product._id}`)}
                  className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                >
                  Learn More
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;