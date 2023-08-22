import NavBar from "./component/NavBar";
import SignUp from "./component/auth/SignUp";
import LogIn from "./component/auth/LogIn";
// import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
