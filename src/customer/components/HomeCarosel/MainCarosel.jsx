import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import { mainCaroselData } from "./MainCaroselData";

const handleDragStart = (e) => e.preventDefault();

const MainCarosel = () => {
  const navigate = useNavigate();

  const items = mainCaroselData.map((slide, i) => (
    <img
      key={i}
      src={slide.image}
      alt=""
      role="presentation"
      onDragStart={handleDragStart}
      onClick={() => navigate(slide.path)}
      className="w-full object-cover object-center cursor-pointer"
      style={{ height: "500px" }}
    />
  ));

  return (
    <div className="overflow-hidden">
      <AliceCarousel
        items={items}
        mouseTracking
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
      />
    </div>
  );
};

export default MainCarosel;
