import React from "react";
import MainCarosel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../HomeSectionCarosel/HomeSectionCarosel";
import { productsBySection } from "../../../../Data/productRegistry";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={productsBySection["Men's Kurta"]} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={productsBySection["Men's Shoes"]} sectionName={"Men's Shoes"} />
        <HomeSectionCarosel data={productsBySection["Men's Shirt"]} sectionName={"Men's Shirt"} />
        <HomeSectionCarosel data={productsBySection["Women's Saree"]} sectionName={"Women's Saree"} />
        <HomeSectionCarosel data={productsBySection["Women's Dress"]} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
