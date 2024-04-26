import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css'
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../slice/women/cartSlice";
import { addToFav, removeFromFav } from "../../slice/women/favoritesSlice";

const Page = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const FavItems = useSelector((state) => state.favorites);
  // const [selectedItems, setSelectedItems] = useState({});
  // const [chekked, setchek] = useState(false)




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

  function AddToFavBtn({ product }) {
    const handleAddToFav = () => {
      dispatch(addToFav(product))
    }
    const handleRemoveFromFav = () => {
      dispatch(removeFromFav(product.id))
    }
    return (
      <button onClick={FavItems.length !== 0 ? handleRemoveFromFav : handleAddToFav}>
        {FavItems.length !== 0 ? <i class="fa-solid fa-heart"></i> : <i class="fa-thin fa-heart"></i>}
      </button>
    )
  }

  // const handleCheckboxChange = (id) => {
  //   setSelectedItems({
  //     ...selectedItems,
  //     [id]: !selectedItems[id]
  //   });
  // };

  const subTotal = cartItems?.reduce((acc, currentItem) => {
    return acc + (currentItem.price * currentItem.quantity);
  }, 0);

  return (
    <div className='cart-page'>
      <div className="cart-page-item">
        <div className="title"><h1>Cart</h1> <p>Products: {cartItems?.length}</p></div>
        <div className="cart-page-products">
          {cartItems.map((el) => (
            <div className="cart-page-product" key={el.id}>
              <img src={el.image} alt={el.name} />
              <div className="cart-page-product-item">
                <div className="product-title"><h1>{el.name}</h1><p>{el.descr}</p></div>
                <div>
                  <AddToFavBtn product={el} />
                  <button onClick={() => handleDeleteItem(el.id)}><i class="fa-solid fa-trash"></i> Delete</button>
                </div>
              </div>
              <div className="cart-page-product-item">
                <div className="quantity-changer">
                  <button onClick={() => handleQuantityDecrement(el.id)}>minus</button>
                  {el.quantity}
                  <button onClick={() => handleQuantityIncrement(el.id)}>plus</button>
                </div>
                <div className="product-price"><h2>${el.price * el.quantity}.00</h2></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="total-priceBx">
        <h1>Total</h1>
        <h2 className="total-price">${subTotal}.00</h2>
        <p className="total-priceBx-item">Product: {cartItems?.length} <br /> Discount: -$10</p>
        <button className="go-checkout" onClick={deleteCartItem}>Go to Checkout</button>
        <p>By ordering, you agree to the terms of use of the trading platform</p>
      </div>
    </div>
  );
};

export default Page;

// import React, { useReducer } from 'react'
// import { useDispatch } from 'react-redux'
// import { removeFromCart } from '../../slice/women/cartSlice';

// function Cart() {
//   const dispatch = useDispatch();
//   const cartItems = useReducer((state) => state.cart);
//   // const favItems = useReducer((state) => state.favorites)
//   // const cartItemsMen = useReducer(state => state.cartMen);
//   // const favItemsMen = useReducer((state) => state.favoritesMen)

//   const handleDeleteItem = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   // const CartItem = [...cartItems, ...cartItemsMen];
//   // const FavItem = [...favItems, ...favItemsMen];
//   // console.log(CartItem);

//   return (
//     <div className='cart-page'>
//       <div className="cart-page-item">
//         <div className="title"><h1>Cart</h1> <p>Products: {cartItems?.length}</p></div>
//         <div className="cart-page-products">
//           {cartItems.map((el) => (
//             <div className="cart-page-product" key={el.id}>
//               <button onClick={() => handleDeleteItem(el.id)}>delete</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="total-priceBx"></div>

//     </div>
//   )
// }

// export default Cart