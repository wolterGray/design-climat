import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import ContactPage from "./components/Pages/ContactPage";
import CatalogPage from "./components/Pages/CatalogPage";
import AboutPage from "./components/Pages/AboutPage";
import React from "react";
import ServicesPage from "./components/Pages/ServicesPages";
import ProductPage from "./components/Pages/ProductPage";
import axios from "axios";
import InstallationPage from "./components/Pages/InstallationPage";
import DesignPage from "./components/Pages/DesignPage";
import ServicePage from "./components/Pages/ServicePage";
import Search from "./components/Search";
import {AnimatePresence} from "framer-motion";
import Cart from "./components/Cart";
import AdminPage from "./components/Pages/admin/AdminPage";

function App() {
  const [airConditioners, setAirConditioners] = React.useState([]);
  const [companyDetails, setCompanyDetails] = React.useState([]);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const location = useLocation();
  async function getAirConditionersData() {
    const response = await axios("/src/data/data.json");
    setAirConditioners(response.data.airConditioners);
    setCompanyDetails(response.data.info)
  }
 

  React.useEffect(() => {
    getAirConditionersData();
  }, []);

  const showHeaderAndFooter = location.pathname !== "/admin";

  return (
    <div className=" text-[16px] h-screen relative">
      {showHeaderAndFooter && (
        <Header setShowSearch={setShowSearch} setShowCart={setShowCart} />
      )}
      <Routes>
        <Route
          path="/"
          element={<HomePage airConditioners={airConditioners} />}
        />
        <Route path="/admin" element={<AdminPage companyDetails={companyDetails} airConditioners={airConditioners}/>} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/household"
          element={
            <CatalogPage
              title={"побутові кондиціонери"}
              airConditioners={airConditioners.household}
            />
          }
        />
        <Route
          path="/split_systems"
          element={
            <CatalogPage
              title={"мульти-Спліт системи"}
              airConditioners={airConditioners.multisplit}
            />
          }
        />
        <Route
          path="household/:id"
          element={<ProductPage airConditioners={airConditioners.household} />}
        />
        <Route
          path="multi-split/:id"
          element={<ProductPage airConditioners={airConditioners.multisplit} />}
        />
        <Route path="services/installation" element={<InstallationPage />} />
        <Route path="services/design" element={<DesignPage />} />
        <Route path="services/service" element={<ServicePage />} />
      </Routes>
      <AnimatePresence>
        {showSearch && <Search setShowSearch={setShowSearch} />}
      </AnimatePresence>
      <AnimatePresence>
        {showCart && <Cart setShowCart={setShowCart} />}
      </AnimatePresence>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
