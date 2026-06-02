import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { findProductById } from "../../../Data/productRegistry";
import { addItemToCart } from "../../../Redux/Customers/cartSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = findProductById(productId);

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-gray-500 mb-4">Product not found.</p>
        <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />}>
          Go back
        </Button>
      </div>
    );
  }

  const hasSizes = product.size && product.size.length > 0;

  const handleAddToCart = () => {
    if (hasSizes && !selectedSize) {
      setSizeError(true);
      return;
    }
    dispatch(
      addItemToCart({
        productId: product.id,
        size: selectedSize?.name || "",
        quantity,
      })
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 gap-1"
      >
        <ArrowBackIcon fontSize="small" />
        Back to products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center min-h-[28rem]">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover object-top max-h-[36rem]"
          />
        </div>

        {/* Details panel */}
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              {product.brand}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              {product.title}
            </h1>
            {product.color && (
              <p className="mt-1 text-sm text-gray-500">Color: {product.color}</p>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">
              €{product.discountedPrice}
            </span>
            {product.price > product.discountedPrice && (
              <>
                <span className="text-lg text-gray-400 line-through">
                  €{product.price}
                </span>
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  {product.discountPersent}% off
                </span>
              </>
            )}
          </div>

          <hr />

          {/* Size selector */}
          {hasSizes && (
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Size{" "}
                {sizeError && !selectedSize && (
                  <span className="text-red-500 font-normal">
                    — please select a size
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.size.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => {
                      setSelectedSize(s);
                      setSizeError(false);
                    }}
                    className={`w-12 h-12 rounded-md border text-sm font-medium transition-colors
                      ${
                        selectedSize?.name === s.name
                          ? "border-indigo-600 bg-indigo-600 text-white"
                          : "border-gray-300 text-gray-700 hover:border-indigo-400"
                      }
                      ${s.quantity === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                    disabled={s.quantity === 0}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-indigo-400 transition-colors"
              >
                <RemoveIcon fontSize="small" />
              </button>
              <span className="w-8 text-center font-semibold text-lg">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-indigo-400 transition-colors"
              >
                <AddIcon fontSize="small" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <Button
            onClick={handleAddToCart}
            variant="contained"
            size="large"
            fullWidth
            sx={{
              bgcolor: "#4f46e5",
              "&:hover": { bgcolor: "#4338ca" },
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            Add to Cart
          </Button>

          {/* Description */}
          {product.description && (
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Description
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
