import { mens_kurta } from "./mens_kurta";
import mensShirt from "./mens_shirt.json";
import { mensShoesPage1 } from "./mens_shoes";
import { sareePage1 } from "./womens_saree";
import { dressPage1 } from "./womens_dress";

const parsePrice = (val) => {
  if (typeof val === "number") return val;
  if (typeof val === "string") return parseInt(val.replace(/[^\d]/g, ""), 10) || 0;
  return 0;
};

const normalize = (item, index, prefix, category) => ({
  id: `${prefix}-${index}`,
  imageUrl: item.imageUrl || item.image || "",
  brand: item.brand || item.title || "",
  title: item.title2 || item.title || "",
  color: item.color || "",
  discountedPrice: parsePrice(item.discountedPrice || item.selling_price),
  price: parsePrice(item.price),
  discountPersent: parsePrice(item.discountPersent || item.disscount),
  size: Array.isArray(item.size) ? item.size : [],
  quantity: item.quantity || 100,
  description: item.description || "",
  topLavelCategory: item.topLavelCategory || "",
  secondLavelCategory: item.secondLavelCategory || "",
  thirdLavelCategory: category,
});

export const allProducts = [
  ...mens_kurta.map((p, i) => normalize(p, i, "mk", "mens_kurta")),
  ...mensShirt.map((p, i) => normalize(p, i, "ms", "shirt")),
  ...mensShoesPage1.map((p, i) => normalize(p, i, "msh", "men_shoes")),
  ...sareePage1.map((p, i) => normalize(p, i, "ws", "saree")),
  ...dressPage1.map((p, i) => normalize(p, i, "wd", "women_dress")),
];

export const productsBySection = {
  "Men's Kurta": allProducts.filter((p) => p.id.startsWith("mk")),
  "Men's Shirt": allProducts.filter((p) => p.id.startsWith("ms")),
  "Men's Shoes": allProducts.filter((p) => p.id.startsWith("msh")),
  "Women's Saree": allProducts.filter((p) => p.id.startsWith("ws")),
  "Women's Dress": allProducts.filter((p) => p.id.startsWith("wd")),
};

export const findProductById = (id) => allProducts.find((p) => p.id === id);
