import products from "../../data/products";
import "./products.css"

function Products() {
  return (
    <section id="products">
      <h2>Our Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <button><a href="https://www.google.com/search?q=lubricating+oil&shoprs=CAEYASoLbWFjaGluZSBvaWwyEwgBEg9MdWJyaWNhdGluZyBPaWxYifIgYAE&sa=X&ved=2ahUKEwj3m_LcrZqVAxWTSmwGHY8HGUwQip4GKAR6BAgYEEw">learn more</a></button>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Products