import "./App.scss";
import "./Assets/Font/Rubik-SemiBold.ttf";
import "./Assets/Font/OpenSans-Regular.ttf";
import "./Assets/Font/OpenSans-SemiBold.ttf";
import { Navbar, Footer } from "./Components";
import { Home } from "./Pages";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
