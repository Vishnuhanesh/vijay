import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <CartProvider>
      {user ? (
        <Home user={user} onLogout={() => setUser(null)} />
      ) : (
        <Login onLogin={(userData) => setUser(userData)} />
      )}
    </CartProvider>
  );
}

export default App;