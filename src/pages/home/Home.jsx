import React from "react";
import "./style.css";
import ProductsListWomen from "../../components/Products/ProductsWomen/ProductsWomen";
import ProductsListMen from "../../components/Products/ProductsMen/ProductsMen";
import homeimg from "../../assets/header-photos/photo1.png";
import homeimg2 from "../../assets/header-photos/photo2.jpg";
import homeimg3 from "../../assets/header-photos/photo3.jpg";
import homeimg4 from "../../assets/header-photos/photo4.jpg";
import advertisement_img1 from "../../assets/advertisement1.jpg";
import advertisement_img2 from "../../assets/advertisement2.jpg";
import blog_cart_img1 from "../../assets/blog/blog-photo1.jpg";
import blog_cart_img2 from "../../assets/blog/blog-photo2.jpg";
import blog_cart_img3 from "../../assets/blog/blog-photo3.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-main">
        <div className="home-main-imgBx">
          <div className="home-main-imgBx-img">
            <img src={homeimg} alt="img" />
            <div className="home-main-imgBx-img-item">
              <button>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <div className="imgBx-banner">
                <p>MISTO</p>
                <h1>E-COMMERCE</h1>
              </div>
              <button>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="home-main-imgBx2">
            <div className="home-main-imgBx2-item">
              <div className="home-women">
                <div>
                  <h3>WOMEN</h3>
                </div>
                <img src={homeimg2} alt="img" />
              </div>
              <div className="home-men">
                <div>
                  <h3>MEN</h3>
                </div>
                <img src={homeimg3} alt="img" />
              </div>
            </div>
            <div className="home-accessories">
              <div>
                <h3>ACCESSORIES</h3>
              </div>
              <img src={homeimg4} alt="img" />
            </div>
          </div>
        </div>
        <div className="home-main-info">
          <div className="home-main-info-item">
            <i className="fa-thin fa-truck"></i>
            <div>
              <h3>FREE SHIPPING</h3>
              <p>On all UA order or order above $100</p>
            </div>
          </div>
          <div className="home-main-info-item">
            <i className="fa-thin fa-arrows-rotate"></i>
            <div>
              <h3>30 DAYS RETURN</h3>
              <p>Simply return it within 30 days for an exchange</p>
            </div>
          </div>
          <div className="home-main-info-item">
            <i className="fa-thin fa-life-ring"></i>
            <div>
              <h3>SUPPORT 24/7</h3>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
      </div>
      <ProductsListWomen />
      <ProductsListMen />
      <div className="home-advertisement">
        <div className="home-advertisement-item">
          <div>
            <p>NEW SEASON</p>
            <h2>LOOKBOOK COLLECTION</h2>
          </div>
          <img src={advertisement_img1} alt="advertisement-img" />
        </div>
        <div className="home-advertisement-item">
          <div>
            <p>SALE</p>
            <h2>GET UP TO 50% OFF</h2>
          </div>
          <img src={advertisement_img2} alt="advertisement-img" />
        </div>
      </div>
      <div className="home-subscription">
        <div className="home-subscription-item">
          <p>SPECIAL OFFER</p>
          <h1>
            SUBSCRIBE AND <h1>GET 10% OFF</h1>
          </h1>
          <input placeholder="Enter your email" required type="text" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="latest-blogs">
        <div className="latest-blogs-title">
          <h1>LATEST FROM BLOG</h1>
          <p>SEE ALL</p>
        </div>
        <div className="latest-blogs-carts">
          <div className="latest-blogs-cart">
            <img src={blog_cart_img1} alt="latest-blogs-cart-img" />
            <div className="latest-blogs-cart-item">
              <h1>THE EASIEST WAY TO BREAK</h1>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleas and praising pain was bor
              </p>
            </div>
          </div>
          <div className="latest-blogs-cart">
            <img src={blog_cart_img2} alt="latest-blogs-cart-img" />
            <div className="latest-blogs-cart-item">
              <h1>WEDDING SEASON</h1>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleas and praising pain was bor
              </p>
            </div>
          </div>
          <div className="latest-blogs-cart">
            <img src={blog_cart_img3} alt="latest-blogs-cart-img" />
            <div className="latest-blogs-cart-item">
              <h1>RECENT FAVORITES ON REPEAT</h1>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleas and praising pain was bor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
