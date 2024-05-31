import React from "react";
import cuponimg1 from "../../assets/images/olov.png";
import cuponimg2 from "../../assets/images/3number.png";
import cuponimg3 from "../../assets/images/number.png";
const Cupon = () => {
  return (
    <div className="cupon">
      <div className="container">
        <div className="cupon__wrapper">
          <div className="cupon__wrapper__card cupon__card-one">
            <div className="cupon__text__wrapper">
              <h2>Горящие товары</h2>
              <p>Всё самое-самое со скидками до 70%</p>
            </div>
            <img src={cuponimg1} alt="" />
          </div>
          <div className="cupon__wrapper__card cupon__card-two">
            <div className="cupon__text__wrapper">
              <h2>Умножайте выгоду на три</h2>
              <p>Суперцены при заказе от 3 до 10 товаров</p>
            </div>
            <img src={cuponimg2} alt="" />
          </div>
          <div className="cupon__wrapper__card cupon__card-three">
            <div className="cupon__text__wrapper">
              <h2>Центр купонов</h2>
              <p>Забирайте и используйте, чтобы цены стали ещё ниже</p>
            </div>
            <img src={cuponimg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cupon;
