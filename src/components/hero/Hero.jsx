import React from "react";
import { IoStar } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import swiperimg1 from "../../assets/images/swiper1.png";
import swiperimg2 from "../../assets/images/swiper2.png";
import swiperimg3 from "../../assets/images/swiper3.png";
import swiperimg4 from "../../assets/images/swiper4.png";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper__top">
            <div className="hero__top__left">
              <p>Месяц красных цен</p>
              <span>
                Из Китая
                <IoStar />
              </span>
            </div>
            <div className="hero__top__right">
              <p>
                <MdLocationPin />
                Chilonzor Tumani
              </p>
              <select name="" id="">
                <option value="RU">RU</option>
              </select>
              <span>UZS</span>
            </div>
          </div>
          <div className="hero__wrapper__bottom">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="myswiper"
            >
              <SwiperSlide className="swiper__text__wrapper">
                <div className="swipper__wrapper">
                  <h2>Скидки до 90%</h2>
                  <p>Максимальная выгода живёт здесь</p>
                  <Button variant="contained">
                    Смотреть
                    <FaAngleRight />
                  </Button>
                </div>
                <img src={swiperimg1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__text__wrapper swiper__one">
                <div className="swipper__wrapper">
                  <h2>Скидки до 90%</h2>
                  <p>Максимальная выгода живёт здесь</p>
                  <Button variant="contained">
                    Смотреть
                    <FaAngleRight />
                  </Button>
                </div>
                <img src={swiperimg2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__text__wrapper swiper__one">
                <div className="swipper__wrapper">
                  <h2>Скидки до 90%</h2>
                  <p>Максимальная выгода живёт здесь</p>
                  <Button variant="contained">
                    Смотреть
                    <FaAngleRight />
                  </Button>
                </div>
                <img src={swiperimg3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper__text__wrapper swiper__one snake">
                <div className="swipper__wrapper">
                  <h2>Скидки до 90%</h2>
                  <p>Максимальная выгода живёт здесь</p>
                  <Button variant="contained">
                    Смотреть
                    <FaAngleRight />
                  </Button>
                </div>
                <img src={swiperimg4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
