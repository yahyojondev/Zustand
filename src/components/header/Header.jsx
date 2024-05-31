import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoBookSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";

const Header = () => {
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  let handleSearch = (data) => {
    return data?.filter((user) =>
      user.title.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
  };
  console.log(handleSearch(data));

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <h1>AliExpress</h1>
          <div className="navbar__right">
            <div className="navbar__icon__wrapper">
              <IoBookSharp />
              <p>Каталог</p>
            </div>
            <div className="navbar__search">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="аниме фигурки"
                type="text"
              />
              <button>Найти</button>
              {searchValue ? (
                <div className="search__list">
                  {searchValue ? (
                    handleSearch(data).length ? (
                      handleSearch(data)?.map((el) => (
                        <>
                          <div className="data__list">
                            <img src={el.images[0]} alt="" />
                            <p>{el.title}</p>
                          </div>
                          <hr />
                        </>
                      ))
                    ) : (
                      <p className="empty">Ma'lumot topilmadi🤷‍♂️</p>
                    )
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
            <ul className="navbar__list">
              <li className="navbar__icon__wrapper">
                <FaRegHeart />
                <p>wishlist</p>
              </li>
              <li className="navbar__icon__wrapper">
                <FaCartShopping />
                <p>Корзина</p>
              </li>
              <li className="navbar__icon__wrapper">
                <FaRegSmile />
                <p>Войти</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
