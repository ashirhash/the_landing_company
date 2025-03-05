import './App.css';
import './css/fonts.css';
import BridgingFinance from './pages/BridgingFinance';
import BuytoLet from './pages/BuytoLet';
import ResidentialMortgages from './pages/ResidentialMortgages';
import CommercialMortgages from './pages/CommercialMortgages';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Routes instead of Switch
import Configure from './pages/Configure';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        {/* Define Routes using Routes and Route components */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/bridging-finance" element={<BridgingFinance />} /> {/* BridgingFinance page */}
          <Route path="/buy-to-let" element={<BuytoLet />} /> {/* BuytoLet page */}
          <Route path="/residential-mortgages" element={<ResidentialMortgages />} /> {/* AuctionFinance page */}
          <Route path="/commercial-mortgages" element={<CommercialMortgages />} /> {/* DevelopmentFinance page */}
          <Route path="/configure" element={<Configure />} /> {/* configure page */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
