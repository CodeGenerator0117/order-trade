### README.md

# Order Trade & Balance Simulation

## Overview
This application simulates a cryptocurrency trading environment where users can view live trading charts, manage orders, and track their balances. The app supports various crypto pairs and offers functionality to interact with real-time data.

## Features

### Trading Chart
- Displays a live trading chart with selectable parameters:
  - **Crypto Pairs:** BTC/USDT, ETH/BTC, LTC/USDT, XRP/USDT

### Order Book
- Live and updatable order book with time frames:
- **Time Frames:** 1min, 5min, 15min, 1h, 12h

### Order Management
- Users can specify an initial balance in USDT.
- Ability to select a crypto pair and create different types of orders:
- **Order Types:** BUY LIMIT, SELL LIMIT, MARKET BUY, MARKET SELL
- Orders can be specified by direct input or by interacting with the order book.
- Orders are visualized in an Order History Table with statuses like Pending, Filled, or Canceled.

### Real-time Notifications
- Notifications alert users when orders are filled based on market conditions.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CodeGenerator0117/order-trade.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd order-trade-sim
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

## Usage

1. **Set Initial Balance:**
   - Enter a USDT value to simulate funds available for trading.

2. **Select Crypto Pair:**
   - Choose from BTC/USDT, ETH/BTC, LTC/USDT, XRP/USDT to display the trading chart and order book.

3. **Create Order:**
   - Choose the order type (BUY LIMIT, SELL LIMIT, MARKET BUY, MARKET SELL).
   - Specify the price and quantity, either manually or by selecting from the order book.
   - Use the range-slider to specify the quantity as a percentage of the balance.

4. **Manage Orders:**
   - View pending and completed orders in the Order History Table.
   - Cancel pending orders as needed.

5. **Receive Notifications:**
   - Get real-time updates when orders are filled.

## Considerations

- **Order Filling Logic:** The application handles order executions on a first-in-first-out (FIFO) basis for orders with the same price and pair.
- **Cancellation:** Orders can be canceled unless they have already been filled.
- **Dynamic Updates:** Utilizes WebSocket or similar technology for real-time updates, reducing server load and improving responsiveness.

## Additional Information

- **Server Requirements:** Suitable backend setup that supports WebSocket communication for live data handling.
- **Browser Compatibility:** Ensure modern browser compatibility and responsive design.
