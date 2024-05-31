import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
const Products = () => {
  const API_Url = "https://dummyjson.com/products";
  const api_url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_Url)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  });

  const cardItem = data?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="card__img__wrapper">
        <img className="card__img" src={el.images[0]} alt="" />
        <div className="card__absolute">
          <p>
            <em>Sale</em>
          </p>
        </div>
      </div>
      <div className="card__content">
        <h4>{el.title}</h4>
        <p className="card__description">{el.description}</p>
        <p className="card__stock">
          <FaStar />
          {el.stock} купили
        </p>
        <div className="price__wrapper">
          <span>
            {el.price} UZS <p>скоро</p>
          </span>
          <div className="price__wishlist">
            <p className="card__price">{el.price * 2} UZS</p>
            <div className="wishlist__absolute">
              <FaRegHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="products__wrapper">
          <div className="products__cards">{cardItem}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
