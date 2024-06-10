import React from 'react';

const data = [
  { pair: "BTC/USDT", price: "6934.89", change: "+0.24%" },
  { pair: "BTR/USDT", price: "0.04029", change: "+2.64%" },
  { pair: "ETH/USDT", price: "3699.00", change: "+0.37%" },
  { pair: "LTC/USDT", price: "15.232", change: "-5.76%" },
  { pair: "XRP/USDT", price: "69.325", change: "-10.53%" },
  { pair: "1CAT/USDT", price: "0.004392", change: "+8.28%" },
  { pair: "1INCH/USDT", price: "0.4442", change: "+7.34%" },
  { pair: "AAVE/USDT", price: "94.04", change: "-2.48%" },
  { pair: "ACA/USDT", price: "0.09", change: "+0.98%" },
  { pair: "ACE/USDT", price: "5.01", change: "-0.84%" },
  { pair: "ACH/USDT", price: "0.02696", change: "+1.01%" },
  { pair: "ACM/USDT", price: "2.192", change: "+1.62%" },
  { pair: "ACM/USDT", price: "2.192", change: "+1.62%" },
  { pair: "ACE/USDT", price: "5.01", change: "-0.84%" },
  { pair: "AAVE/USDT", price: "94.04", change: "-2.48%" },
  { pair: "ACM/USDT", price: "2.192", change: "+1.62%" },
  { pair: "ACM/USDT", price: "2.192", change: "+1.62%" },
  { pair: "AAVE/USDT", price: "94.04", change: "-2.48%" },
  { pair: "ACE/USDT", price: "5.01", change: "-0.84%" },
  { pair: "ACM/USDT", price: "2.192", change: "+1.62%" },
  { pair: "ACM/USDT", price: "2.192", change: "+1.62%" },
];

function CryptoTable() {
  return (
    <div className="container mt-4 pr-5">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Pair</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.pair}</td>
              <td>{item.price}</td>
              <td className={`text-${item.change.startsWith('+') ? 'success' : 'danger'}`}>
                {item.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
