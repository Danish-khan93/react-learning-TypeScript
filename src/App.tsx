import NavBar from "./component/NavBar";
import SignUp from "./component/auth/SignUp";
import LogIn from "./component/auth/LogIn";
import { Routes, Route } from "react-router-dom";
import ProductList from "./component/products/productList";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList/>} />
        {/* <Route path="/"    element={< />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />

      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
