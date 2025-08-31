import React, { useState, useEffect } from "react";
import "./SwiperHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { gamesCharecter } from "../../data.s";
import { FcRating } from "react-icons/fc";
import Titr from "../Titr/Titr";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SwiperHome() {
  const [topgamesCharecter, setTopgamesCharecter] = useState(gamesCharecter);

  useEffect(() => {
    AOS.init({ duration: 1000, throttleDelay: 50 });
  }, []);

  return (
    <div className="SwiperHome" data-aos="fade-up">
      <Titr titr="Top Favorite Game Characters" />
      <Swiper
        className="swiper"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          375: {
            slidesPerView: 1.5,
          },
          414: {
            slidesPerView: 1.6,
          },
          430: {
            slidesPerView: 1.9,
          },
          481: {
            slidesPerView: 1.9,
          },
          577: {
            slidesPerView: 2.5,
          },
          600: {
            slidesPerView: 2.3,
          },
          700: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 3.5,
          },
          930: {
            slidesPerView: 4,
          },
          1153: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        modules={[EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2.5,
          slideShadows: false,
        }}
      >
        {topgamesCharecter.map((game) => (
          <SwiperSlide key={game.id} className="swiper-slide">
            <div className="game-card" style={{ backgroundColor: game.color }}>
              <div className="info">
                <h3>{game.name}</h3>
                <span className="rating">
                  <FcRating />
                  {game.rating}
                </span>
              </div>
              <img
                src={game.img}
                alt={game.name}
                style={{ maxWidth: game.width }}
                className="img-swiper"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
