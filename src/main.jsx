import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import CartProvider from "./context/CartContext"
import WishlistProvider from "./context/WishlistContext"

import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <App />
          <Toaster />
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>
)