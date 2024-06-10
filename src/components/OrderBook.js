import React from 'react';

const orderData = [
  { price: 154.99, amount: 0.070, volume: 10.84 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 94.42, amount: 13.957, volume: 1317.81 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 154.99, amount: 0.070, volume: 10.84 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 94.42, amount: 13.957, volume: 1317.81 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 94.42, amount: 13.957, volume: 1317.81 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 154.99, amount: 0.070, volume: 10.84 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 94.42, amount: 13.957, volume: 1317.81 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 94.42, amount: 13.957, volume: 1317.81 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 154.99, amount: 0.070, volume: 10.84 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 94.42, amount: 13.957, volume: 1317.81 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 94.42, amount: 13.957, volume: 1317.81 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 154.99, amount: 0.070, volume: 10.84 },
  { price: 105.88, amount: 0.050, volume: 5.29 },
  { price: 94.42, amount: 13.957, volume: 1317.81 },
];

function OrderBook() {
  return (
    <div className="order-book">
      <div className="order-header">
        <span>Price(USDT)</span>
        <span>Amount(AAVE)</span>
        <span>Volume</span>
      </div>
      {orderData.map((order, index) => (
        <div key={index} className={`order-row ${index > 12 ? 'sell' : 'buy'}`}>
          <span>{order.price.toFixed(2)}</span>
          <span>{order.amount.toFixed(3)}</span>
          <span>{order.volume.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

export default OrderBook;
