import NavBar from "./component/NavBar"
import SignUp from "./component/auth/SignUp"
import LogIn from "./component/auth/LogIn"
import Footer from "./component/Footer"
const App = () => {
  return (
    <div>
      <NavBar/>
      <SignUp/>
      <LogIn/>
      <Footer/>
    </div>
  )
}

export default App