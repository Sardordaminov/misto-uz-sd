import React from 'react'
import { products } from '../../../data/data'
import changeTitle from '../../../components/TitleChange/change-title';
import { useParams } from 'react-router-dom';
import NotFound from '../../not-found/NotFound';

function ProductView() {
    const { id, category } = useParams()
    const productsView = products;
    const product = productsView.filter(filteredProduct => filteredProduct.category === category).filter(product => product.id === id)
    changeTitle(product?.map(name => name.name))
    return (
        <>
            {product?.length === 0 ? (
                <>
                    <NotFound />
                </>
            ) : (
                <>
                    {product?.map((item, index) => (
                        <div key={index}>{item.name}</div>
                    ))}
                </>
            )
            }
        </>
    )
}

export default ProductView