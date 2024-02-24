import React from "react";
import Layout from "./layout/layout";
import { Routes } from "./routes";
import { CartProvider } from "./pages/cart/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Layout>
        <Routes />
      </Layout>
    </CartProvider>
  );
};

export default App;
