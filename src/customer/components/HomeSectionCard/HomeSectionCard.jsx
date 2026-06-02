import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  const image = product.imageUrl || product.image;
  const brand = product.brand;
  const title = product.title;

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg
    shadow-lg overflow-hidden w-[15rem] mx-3 border hover:shadow-xl transition-shadow"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{brand}</h3>
        <p className="mt-1 text-sm text-gray-500">{title}</p>
        {product.discountedPrice > 0 && (
          <p className="mt-1 text-sm font-semibold text-gray-800">
            €{product.discountedPrice}
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCard;
