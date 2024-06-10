import React, { useState } from 'react';
import 'react-rangeslider/lib/index.css';
import Slider from 'react-rangeslider';

function OrderForm({balance=0}) {
    const [orderType, setOrderType] = useState('buy');
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [total, setTotal] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const orderDetails = {
            type: orderType,
            price: price,
            amount: amount,
        };
        console.log("Submitting Order: ", orderDetails);
    };

    return (
        <div className="order-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <select
                        value={orderType}
                        onChange={(e) => setOrderType(e.target.value)}
                        className="form-control"
                    >
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Price (USDT)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) => {
                            const newPrice = parseFloat(e.target.value);
                            if (newPrice === 0) {
                                setAmount(0);
                                setTotal(0);
                            }
                            setPrice(newPrice);
                            setTotal(newPrice*amount2);
                            setAmount((newPrice*amount2/balance*100).toFixed(2));
                        }}
                    />
                </div>
                
                <div className="form-group">
                    <label>Amount (BTC)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={price === 0 ? 0 : amount2}
                        
                        onChange={(e) => {
                            if (price === 0) {
                            } else {
                                setTotal((e.target.value * price).toFixed(2))
                                setAmount((e.target.value*price/balance*100).toFixed(2));
                            }
                            setAmount2(e.target.value)
                        }}
                    />
                </div>
                <div className="form-group">
                    <Slider
                        value={amount}
                        onChange={(val) => {
                            if (price === 0) {
                                setTotal(0);
                            } else {
                                setTotal((balance * val / 100).toFixed(2));
                                setAmount2((total/price).toFixed(2));
                            }
                            setAmount(val);
                        }}
                        max={100}
                        min={0}
                        step={0.1}
                    />
                </div>
                
                <div className="form-group">
                    <label>Total (USDT)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={total}
                        
                        onChange={(e) => {
                            if (e.target.value>balance) {
                                setTotal(balance)
                                setAmount(100)
                                setAmount2((balance/price).toFixed(2));
                            } else {
                                setTotal(e.target.value)
                                setAmount((e.target.value/balance*100).toFixed(2));
                                setAmount2((e.target.value/price).toFixed(2));
                            }
                        }}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className={`btn ${orderType === 'buy' ? 'btn-success' : 'btn-danger'}`}>
                        {orderType === 'buy' ? 'Buy BTC' : 'Sell BTC'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default OrderForm;
