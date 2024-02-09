import "./App.scss";
import "./Assets/Font/Rubik-SemiBold.ttf";
import "./Assets/Font/OpenSans-Regular.ttf";
import "./Assets/Font/OpenSans-SemiBold.ttf";
import { Navbar, Footer } from "./Components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
