import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
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
import React from "react";
import Silder from "./components/Silder/Silder";
import CategoryPage from "./pages/Category/CategoryPage";
import Product from "./pages/Product/Product";
import HeaderNew from "./components/Header-New/HeaderNew";

function App() {
  const [isUserLog, setIsUserLog] = React.useState(false);
  React.useEffect(() => {
    setIsUserLog(!!localStorage.getItem("isUserLog"));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <header className="sticky-top">
          {/* <Navbar />
          <Header /> */}
          <HeaderNew />
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
                {isUserLog ? (
                  <>
                    <Home />
                  </>
                ) : (
                  <Sign />
                )}
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
            path="/product/:productId"
            element={
              <>
                <Product />
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                <Category />
              </>
            }
          />
          <Route
            path="/category"
            element={
              <>
                <CategoryPage />
              </>
            }
          />
          <Route
            path="/silder"
            element={
              <>
                <Silder />
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
