import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css'
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../slice/women/cartSlice";

const Page = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [selectedItems, setSelectedItems] = useState({});
  const [chekked, setchek] = useState(false)




  const deleteCartItem = () => {
    localStorage.removeItem('cart');
    window.location.reload()
  }

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityIncrement = (id) => {
    dispatch(incrementQty(id));
  };

  const handleQuantityDecrement = (id) => {
    dispatch(decrementQty(id));
  };

  const handleCheckboxChange = (id) => {
    setSelectedItems({
      ...selectedItems,
      [id]: !selectedItems[id]
    });
  };

  const subTotal = cartItems?.reduce((acc, currentItem) => {
    return acc + (selectedItems[currentItem.id] ? currentItem.price * currentItem.quantity : 0);
  }, 0);

  return (
    <div >
      <div className="home_cart_products">
        <div className="cart_products">
          <h2>
            Savatingizda, <span>{cartItems?.length} mahsulot bor</span>
          </h2>
          <div className="cart_product_item">
            <div>
              <input type="checkbox" onChange={(e) => setchek(!chekked)} value={chekked ? "checked" : ""} />
              <h4>Hammasini yechish</h4>
            </div>
            <div>


            </div>
          </div>
          {cartItems?.map((item) => (
            <div key={item.id} className="cart_product_items">
              <div className="cart_product_items_img">
                <input
                  type="checkbox"
                  checked={selectedItems[item.id]}
                  onChange={() => handleCheckboxChange(item.id)}

                />
                <img src={item.image} alt="/" />
              </div>
              <div className="cart_products_items_sale">
                <h3>{item.title}</h3>

                <span> {item.price ? item.price : " "}</span>
                <p>
                  Sotuvchi: <span>Дети</span>
                </p>
              </div>
              <div className="cart_products_cart_products_items_count">
                <div className="cart_products_cart_products_items_count_1">
                  <button onClick={() => handleQuantityDecrement(item.id)}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <h3>{item.quantity}</h3>
                  <button onClick={() => handleQuantityIncrement(item.id)}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="cart_products_cart_products_items_trash">
                <button onClick={() => handleDeleteItem(item.id)}>
                  <i class="fa-solid fa-trash"></i>
                </button>
                <p>{selectedItems[item.id] ? item.quantity * item.price + ' so\'m' : ''}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="order">
          <div className="place_an_order">
            <div className="order_img">
            </div>
            <div className="order_text">
              <b>
                Buyurtmangizni rasmiy topshirish punktiga bepul yetkazib beramiz
              </b>
              <p>Eshikkacha yetkazib berishgacha yana 405 000 so'm</p>
            </div>
          </div>
          <div className="order_product">
            <h3>Buyurtmangiz</h3>
            <div className="order_product_page">
              <span>Mahsulotlar {cartItems?.length}:</span>
              <p>155 000 so'm</p>
            </div>
            <div className="data_order">
              <span>Yetkazib berish M09 28 (Bugun)</span>
            </div>
            <div className="order_price">
              <span>Jami:</span>
              <b>{subTotal} so'm</b>
            </div>
            <button onClick={() => deleteCartItem()}>Rasmiylashtirishga o'tish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

