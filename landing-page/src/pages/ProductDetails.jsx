import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/products/${id}`
      );

      setProduct(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-start">


          <div className="bg-white rounded-2xl shadow-lg p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-contain"
            />
          </div>


          <div>

            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold mt-5">
              {product.name}
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-5">
                Available Variations
              </h2>

              <div className="space-y-4">

                {product.variations.map(
                  (variation, index) => (
                    <div
                      key={index}
                      className="bg-white border rounded-xl p-4 flex justify-between items-center shadow-sm"
                    >
                      <span className="font-semibold">
                        {variation.size}
                      </span>

                      <span className="text-red-600 font-bold">
                        ₹{variation.price}
                      </span>

                      <span>
                        Stock: {variation.stock}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

            <div className="mt-10 bg-white rounded-xl shadow p-6">

              <h2 className="text-2xl font-bold mb-4">
                Contact Information
              </h2>

              <div className="space-y-3 text-gray-700">

                <p>
                  📞 +91 98765 43210
                </p>

                <p>
                  ✉ info@lubrimax.com
                </p>

                <p>
                  📍 Kerala, India
                </p>

              </div>

            </div>

            {/* Back Button */}

            <div className="mt-8">

              <button
                onClick={() => navigate("/")}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                ← Back To Products
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;