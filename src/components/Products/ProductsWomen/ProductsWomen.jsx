import React from 'react';
import { products } from '../../../data/data';
import Product from '../../product/productWomen/product';
import '../style.css'

export default function ProductsListWomen() {
    return (
        <div className='products-main'>
            <div className='products-main-title'>
                <h1>WOMEN’S</h1>
                <div>
                    <p>NEW ARRIVALS</p>
                    <p>SPECIALS</p>
                    <p>BESTSELLERS</p>
                    <p>MOST VIEWED</p>
                    <p>FEATURED PRODUCTS</p>
                </div>
            </div>
            {products?.length === 0 ? (
                <div className='product-not-found'>
                    <h1>Oops Something wrong :(</h1>
                </div>
            ) : (
                <div className='products'>
                    {products.map((el, index) => (
                        <Product
                            key={el.id}
                            el={el}
                            index={index}
                        />
                    ))}
                </div>
            )}
            <button className="products-main-seemoreBtn">SEE ALL</button>
        </div>
    );
}
