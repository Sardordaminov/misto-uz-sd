import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../slice/women/cartSlice'

export default function Product({ el }) {
  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    dispatch(addToCart(el))
  }

  return (
    <>
      <div className='product-card'>
        <div className='product-card-imgbx' >
          {el.id === 2 ? (<div className='card-sale'>{el.sale}</div>) : ''}
          <Link to={`/categories-woman/${el.category}/${el.id}`}>
            <img src={el.image} alt={el.name} />
          </Link>
          <div className='product-card-actions'>
            <div className="product-card-addBtn" onClick={() => handleAddToCart(el)}>ADD TO CART</div>
            <div className='product-card-actions-item'>
              <Link className='product-card-info-btn' to={`/categories-woman/${el.category}/${el.id}`}><i class="fa-solid fa-info"></i></Link>
              <button><i class="fa-thin fa-heart"></i></button>
            </div>
          </div>
        </div>
        <p className='product-card-name'>{el.name}</p>
        <div className='product-card-price-rate'>
          <h2>${el.price}</h2>
          <div className='rating'>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </>
  )
}
