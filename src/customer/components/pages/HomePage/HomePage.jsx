import React from "react";
import MainCarosel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../../Data/mens_kurta";
import mensShirt from "../../../../Data/mens_shirt.json";
import { mensShoesPage1 } from "../../../../Data/mens_shoes";
import { sareePage1 } from "../../../../Data/womens_saree";
import { dressPage1 } from "../../../../Data/womens_dress";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={mensShoesPage1} sectionName={"Men's Shoes"} />
        <HomeSectionCarosel data={mensShirt} sectionName={"Men's Shirt"} />
        <HomeSectionCarosel data={sareePage1} sectionName={"Women's Saree"} />
        <HomeSectionCarosel data={dressPage1} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
