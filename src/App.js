import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Your custom styles

import { PriceChart } from './components/PriceChart';
import CryptoTable from './components/CryptoTable';
import OrderForm from './components/OrderForm';
import OrderBook from './components/OrderBook';

function App() {
  const [myBalance, setMyBalance] = React.useState(5000);
  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "#191c27", overflowX: 'hidden', boxSizing: 'border-box' }}>
      <Router>
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
              <div style={{ width: '20%' }}>
                <CryptoTable />
              </div>
              <div style={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
                <div>
                  <PriceChart />
                </div>
                <div>
                  <OrderForm balance={myBalance}/>
                </div>
              </div>
              <div style={{ width: '20%' }}>
                <OrderBook />
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
