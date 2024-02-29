import React from 'react'
import './style.css'
import { filterData } from '../../../data/data'

function FilterItem() {
    return (
        <div className='filter'>
            {filterData.map((items) => (
                <div className='filters' key={items.id}>
                    <h1 className='filters-title'>{items.title}</h1>
                    {items.item.map((item) => (
                        <div className='filters-item' key={item.id}>
                            <div className='filters-color-item' >
                                {item.color && <div className='color-div' style={{ backgroundColor: item.color, width: 20, height: 20 }}></div>}
                                {item.colorName}
                            </div>
                            {item.size && <div className='filters-item-div'><input type="checkbox" />{item.size}</div>}
                            {item.brandName && <div className='filters-item-div'><input type="checkbox" />{item.brandName}</div>}
                            {item.price && <div className='filters-item-div'><input type="checkbox" />{item.price}{item.priceFrom && item.priceFrom}</div>}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default FilterItem