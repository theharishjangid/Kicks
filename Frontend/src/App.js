import "./App.scss";
import "./Assets/Font/Rubik-SemiBold.ttf";
import "./Assets/Font/OpenSans-Regular.ttf";
import "./Assets/Font/OpenSans-SemiBold.ttf";
import { Navbar, Footer } from "./Components";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
