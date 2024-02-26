import React, { useState } from "react";
import { products } from "../../../data/data";
import changeTitle from "../../../components/TitleChange/change-title";
import { useParams, Link } from "react-router-dom";
import NotFound from "../../not-found/NotFound";
import "../style.css";

function ProductView() {
  const { id, category } = useParams();
  const [size, setSize] = useState("S");
  const productsView = products;
  const product = productsView
    .filter((filteredProduct) => filteredProduct.category == category)
    .filter((product) => product.id == id);
  changeTitle(product?.map((name) => name.name));
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
                <Link to={`/categories/${item.category}`}>{item.category}</Link>
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
                    <div className="product-addBtn">ADD TO CARD</div>
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
