import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Sella from "../../../assets/images/sella.png";
import Evolvere from "../../../assets/images/evolvere.png";
import Forbes from "../../../assets/images/forbes.png";
import Iliad from "../../../assets/images/iliad.png";
import Fastweb from "../../../assets/images/fastweb.png";
import Image from "next/image";

const BrandsCarousel: React.FC = () => {
  return (
    <Swiper
      style={{ marginTop: "50px" }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      loop
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src={Sella} width={256} height={91} alt="sella" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Evolvere} width={256} height={91} alt="sella" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Forbes} width={256} height={91} alt="sella" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Iliad} width={256} height={91} alt="sella" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Fastweb} width={256} height={91} alt="sella" />
      </SwiperSlide>
    </Swiper>
  );
};
export default BrandsCarousel;
