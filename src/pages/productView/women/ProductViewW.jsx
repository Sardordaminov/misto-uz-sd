import React, { useState } from "react";
import { products } from "../../../data/data";
import changeTitle from "../../../components/TitleChange/change-title";
import { useParams, Link } from "react-router-dom";
import NotFound from "../../not-found/NotFound";
import "../style.css";

import image1 from '../../../assets/products/productView/image1.png'
import image2 from '../../../assets/products/productView/image2.png'
import image3 from '../../../assets/products/productView/image3.png'
import image4 from '../../../assets/products/productView/image4.png'
import image5 from '../../../assets/products/productView/image5.png'
import image6 from '../../../assets/products/productView/image6.png'
import image7 from '../../../assets/products/productView/image7.png'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../slice/women/cartSlice";
import { addToFav, removeFromFav } from "../../../slice/women/favoritesSlice";


function ProductView() {
    const dispatch = useDispatch();
    const { id, category } = useParams();
    const [size, setSize] = useState("S");
    const productsView = products;
    const product = productsView
        .filter((filteredProduct) => filteredProduct.category == category)
        .filter((product) => product.id == id);
    changeTitle(product?.map((name) => name.name))

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }
    function AddToFavBtn({ product }) {
        const favorites = useSelector(state => state.favorites.filter(fav => fav.id === product.id))
        const handleAddToFav = () => {
            dispatch(addToFav(product))
        }
        const handleRemoveFromFav = () => {
            dispatch(removeFromFav(product.id))
        }
        return (
            <button onClick={favorites.length !== 0 ? handleRemoveFromFav : handleAddToFav}>
                {favorites.length !== 0 ? <i class="fa-solid fa-heart"></i> : <i class="fa-thin fa-heart"></i>}
            </button>
        )
    }

    return (
        <>
            {product?.length === 0 ? (
                <>
                    <NotFound />
                </>
            ) : (
                <>
                    {product?.map((item, index) => (
                        <div key={item.id} className="productview-page">
                            <div className="location">
                                <Link to="/">Home</Link>
                                <i class="fa-solid fa-caret-right"></i>
                                <Link to={`/categories-woman/${item.category}`}>{item.category}</Link>
                                <i class="fa-solid fa-caret-right"></i>
                                {item.name}
                            </div>

                            <div className="page-title">
                                <div className="rating">
                                    <i className="fa-solid fa-star checked"></i>
                                    <i className="fa-solid fa-star checked"></i>
                                    <i className="fa-solid fa-star checked"></i>
                                    <i className="fa-solid fa-star checked"></i>
                                    <i className="fa-solid fa-star checked"></i>
                                    <p>2 Reviews</p>
                                </div>
                                <h1>{item.name}</h1>
                                <div className="page-title-item">
                                    <p>
                                        SKU:<span>777</span>
                                    </p>
                                    <p>
                                        Availability:<span>In Stock</span>
                                    </p>
                                </div>
                            </div>
                            <div className="page-product">
                                <div className="page-product-imgBx">
                                    {item.id === 2 ? (<div className='card-sale'>{item.sale}</div>) : ''}
                                    <div className="page-product-imgBx-item">
                                        <button>
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </button>
                                        <button>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </button>
                                    </div>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="page-product-item">
                                    <div className="page-product-item-color">
                                        <p>
                                            COLOR: <span>{item.color}</span>
                                        </p>
                                        <img src={item.image} alt={item.color} />
                                    </div>
                                    <div className="page-product-item-size">
                                        <p>SIZE: {size}</p>
                                        <div>
                                            <button className={`size-select-btn ${size == "XS" ? 'active' : ''}`} value="XS" onClick={(e) => setSize(e.target.value)}>XS</button>
                                            <button className={`size-select-btn ${size == "S" ? 'active' : ''}`} value="S" onClick={(e) => setSize(e.target.value)}>S</button>
                                            <button className={`size-select-btn ${size == "M" ? 'active' : ''}`} value="M" onClick={(e) => setSize(e.target.value)}>M</button>
                                            <button className={`size-select-btn ${size == "L" ? 'active' : ''}`} value="L" onClick={(e) => setSize(e.target.value)}>L</button>
                                        </div>
                                        <p><i class="fa-light fa-clothes-hanger"></i>Size guide</p>
                                    </div>
                                    <div className="page-product-add-section">
                                        <h1>${item.price}</h1>
                                        <div className="product-addBtn" onClick={() => handleAddToCart(item)}>ADD TO CARD</div>
                                        <AddToFavBtn product={item} />
                                        <button><i class="fa-light fa-scale-balanced"></i></button>
                                    </div>
                                    <div className="page-product-opportunities">
                                        <div>
                                            <i className="fa-thin fa-truck"></i>
                                            <p>Shipping & Delivery</p>
                                        </div>
                                        <div>
                                            <i className="fa-thin fa-arrows-rotate"></i>
                                            <p>Returns & Exchanges</p>
                                        </div>
                                        <div>
                                            <i class="fa-thin fa-envelope"></i>
                                            <p>Ask a question</p>
                                        </div>
                                    </div>
                                    <div className="page-product-checkout">
                                        <p className="page-product-checkout-title">GUARANTEED SAFE CHECKOUT</p>
                                        <div>
                                            <a target="_blank" rel="noreferrer" href="https://stripe.com/"><img src={image1} alt="img" /></a>
                                            <a target="_blank" rel="noreferrer" href="https://www.kingston.com/"><img src={image2} alt="img" /></a>
                                            <a target="_blank" rel="noreferrer" href="https://paypal.com/"><img src={image3} alt="img" /></a>
                                            <a target="_blank" rel="noreferrer" href="https://visa.com/"><img src={image4} alt="img" /></a>
                                            <a target="_blank" rel="noreferrer" href="https://www.mastercard.ru/ru-ru.html"><img src={image5} alt="img" /></a>
                                            <a target="_blank" rel="noreferrer" href="https://www.discoverglobalnetwork.com/"><img src={image6} alt="img" /></a>
                                            <a target="_blank" rel="noreferrer" href="https://www.americanexpress.com/"><img src={image7} alt="img" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default ProductView;
