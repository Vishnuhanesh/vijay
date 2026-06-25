import { useCart } from "../../context/CartContext";
import "./GrabGo.css";

const items = [
  {
    id: 1,
    name: "cheese",
    image: "https://cdn.corenexis.com/f/FxCyY8DpoXL.avif",
    price: "$58",
  },
  {
    id: 2,
    name: "orange juice",
    image: "https://cdn.corenexis.com/f/XikDTR1Zmue.jpg",
    price: "$35",
  },
  {
    id: 3,
    name: "Fresh Bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    price: "$35",
  },
  {
    id: 4,
    name: "Milk",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    price: "$30",
  },
  {
    id: 5,
    name: "coffee",
    image: "https://cdn.corenexis.com/f/84YmZxb10XJ.webp",
    price: "$20",
  },
  {
    id: 6,
    className: "Chocolate Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    price: "$55",
  },
];

function GrabGo() {
  const { addToCart } = useCart();

  return (
    <section id="categories" className="grabgo">
      <div className="grabgo-header">
        <h2>Grab & Go</h2>
        <p>Quick picks for your daily essentials</p>
      </div>

      <div className="grabgo-container">
        {items.map((item) => (
          <div className="grab-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GrabGo;