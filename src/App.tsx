import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Singleproductpage from "./components/Singleproductpage/Singleproductpage";
import Sign from "./components/Sign/Sign";
import Userprofile from "./components/UserProfile/Userprofile";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="sticky-top">
          <Navbar />
          <Header />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Sign />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route
            path="/singleproductpage"
            element={
              <>
                <Singleproductpage />
              </>
            }
          />
          <Route
            path="/userprofile"
            element={
              <>
                <Userprofile />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Cart />
              </>
            }
          />
          <Route
            path="/category"
            element={
              <>
                <Category />
              </>
            }
          />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
