import React from 'react'
import './style.css'
import { products } from '../../../data/data';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {

    const bestsellers = products.slice(0, 3);

    return (
        <div className='nav-menu'>
            <div className='nav-item'>
                <div className='nav-item-div'>
                    <h3>TOPS</h3>
                    <p>Awesome</p>
                    <p>Beachwear</p>
                    <p>Beige</p>
                    <p>Cool New</p>
                    <p>Dress</p>
                    <p>Gap</p>
                    <p>Guess</p>
                </div>
                <div className='nav-item-div'>
                    <h3>BOTTOMS</h3>
                    <p>Jeans</p>
                    <p>Lacoste</p>
                    <p>Levi's</p>
                    <p>Model</p>
                    <p>Nice Featured</p>
                    <p>Polo</p>
                    <p>Pullover</p>
                </div>
                <div className='nav-item-div'>
                    <h3>ACCESSORIES</h3>
                    <p>Scarf Sale 13%</p>
                    <p>Shirt</p>
                    <p>Shoes</p>
                    <p>Shorts</p>
                    <p>Summer</p>
                    <p>Sunglasses</p>
                    <p>Vintage</p>
                </div>
                <div className="bestsellers">
                    <div className="bestsellers-title">
                        <h3>BESTSELLERS</h3>
                        <div>
                            <button><i className="fa-regular fa-chevron-left"></i></button>
                            <button><i className="fa-regular fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className='bestsellers-items'>
                        {bestsellers.map((item) => (
                            <NavLink to={`/products/${item.id}`}>
                                <div key={item.id} className='bestsellers-item'>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <h3>${item.price}</h3>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu