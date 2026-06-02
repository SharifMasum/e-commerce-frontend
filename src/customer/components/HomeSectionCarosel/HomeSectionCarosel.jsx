import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 4 },
};

const btnSx = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  bgcolor: "white",
  boxShadow: 3,
  minWidth: 0,
  width: 36,
  height: 36,
  borderRadius: "50%",
  p: 0,
  "&:hover": { bgcolor: "grey.100" },
};

const HomeSectionCarosel = ({ data, sectionName }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = data.slice(0, 10).map((item, i) => (
    <HomeSectionCard key={i} product={item} />
  ));

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();
  const onSlideChanged = ({ item }) => setActiveIndex(item);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 px-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={onSlideChanged}
          activeIndex={activeIndex}
        />

        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            sx={{ ...btnSx, left: "-12px" }}
            aria-label="Previous"
          >
            <KeyboardArrowLeftIcon sx={{ color: "black" }} />
          </Button>
        )}

        {activeIndex < items.length - 4 && (
          <Button
            onClick={slideNext}
            sx={{ ...btnSx, right: "-12px" }}
            aria-label="Next"
          >
            <KeyboardArrowRightIcon sx={{ color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
