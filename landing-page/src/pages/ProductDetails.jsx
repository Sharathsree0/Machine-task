import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

function ProductDetails() {
  const { id } = useParams();

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
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow-lg"
        />

        <div>

          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {product.name}
          </h1>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <h3 className="mt-8 text-xl font-bold">
            Available Variations
          </h3>

          <div className="space-y-3 mt-4">
            {product.variations.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex justify-between"
              >
                <span>{item.size}</span>

                <span>
                  ₹{item.price}
                </span>

                <span>
                  Stock: {item.stock}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;