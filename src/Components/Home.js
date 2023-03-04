import { CartState } from "../Context";
import Product from "./Product";

const Home = () => {
  const { products } = CartState();

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <Product prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;