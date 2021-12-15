import './App.css';

import { Route, Routes } from 'react-router-dom';

// pages
import HomePage from './Pages/HomePage/HomePage';

// Components
import NavbarComponent from './Components/NavbarComponent.js/NavbarComponent';
import SecondNavbarComponent from './Components/SecondNavbarComponent/SecondNavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <SecondNavbarComponent />
      {/* Navbar */}

      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>

      {/* Footer */}
    </div>
  );
}

export default App;
