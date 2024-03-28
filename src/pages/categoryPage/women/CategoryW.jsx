import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Product from '../../../components/product/productWomen/product'
import { products } from '../../../data/data'
import FilterItem from '../filter/FilterItem'
import '../style.css'

function CategoryW() {
    const [filter, setFilter] = useState(false)
    return (
        <div className='category-page'>
            <div className="location">
                <Link to="/">Home</Link>
                <i class="fa-solid fa-caret-right"></i>
                <p>Women</p>
            </div>
            <div className="category-page-title"><h1>WOMEN</h1></div>
            <div className='category-page-products'>
                <div className={`category-page-products-item ${filter && 'active'}`}>
                    <div className='item-top'>
                        <div onClick={() => setFilter(!filter)} className="filter-openBtn"><i className={`${filter ? "fa-light fa-xmark-large" : "fa-duotone fa-sliders-up"}`}></i> FILTER</div>
                        <div className='view-style-main'>
                            <button><i class="fa-regular fa-bars"></i></button>
                            <button><i class="fa-regular fa-grid-2"></i></button>
                        </div>
                        <select className='view-style'>
                            <option value="bestsellers">BESTSELLERS</option>
                            <option value="topitems">TOPITEMS</option>
                        </select>
                    </div>
                    {filter ? (
                        <div className='filter-modal'><FilterItem /></div>
                    ) : ''}
                </div>
                <div className='products'>
                    {products.map((el, index) => (
                        <Product
                            key={el.id}
                            el={el}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default CategoryW