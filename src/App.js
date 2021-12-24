import './App.css';

import { Route, Routes } from 'react-router-dom';

// pages
import HomePage from './Pages/HomePage/HomePage';

// Components
import NavbarComponent from './Components/NavbarComponent.js/NavbarComponent';
import SecondNavbarComponent from './Components/SecondNavbarComponent/SecondNavbarComponent';
import ProductsSinglePage from './Pages/ProductsSinglepage/ProductsSinglePage';
import ProductsSideBarComponent from './Components/ProductsSideBarComponent/ProductsSideBarComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import WishLsitPage from './Pages/WishListPage/WishLsitPage';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <SecondNavbarComponent />
      <ProductsSideBarComponent />

      {/* Navbar */}

      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Ecommerce/Products:Name" element={<ProductsSinglePage />} />
        <Route exact path="/Wishlist/Products" element={<WishLsitPage />} />
      </Routes>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;
