import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <div>
      sidebar
      </div>
      <div>
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
      </div>
  );
}

export default App;
