import './App.css';

import { Route, Routes } from 'react-router-dom';

// pages
import HomePage from './Pages/HomePage/HomePage';

// Components
import NavbarComponent from './Components/NavbarComponent.js/NavbarComponent';
import SecondNavbarComponent from './Components/SecondNavbarComponent/SecondNavbarComponent';
import ProductsSinglePage from './Pages/ProductsSinglepage/ProductsSinglePage';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <SecondNavbarComponent />
      {/* Navbar */}

      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Ecommerce/Products:Name" element={<ProductsSinglePage />} />
      </Routes>

      {/* Footer */}
    </div>
  );
}

export default App;
