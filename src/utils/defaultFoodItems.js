import { pricePer100Gram, proteinPerDollar } from "./getNutrients.js";

export const createFoodItem = (id, name, price, protein, unit) => {
  return {
    id,
    name,
    price,
    protein,
    unit,
    pricePer100g: pricePer100Gram(price, unit),
    proteinPerDollar: proteinPerDollar(protein, price, unit)
  };
}

export const defaultFoodItems = [
  createFoodItem("1", "Apple", 1.2, 0.3, "oz"),
  createFoodItem("2", "Banana", 0.5, 0.74, "lb"),
  createFoodItem("3", "Chicken Breast", 5.0, 31, "lb"),
  createFoodItem("4", "Broccoli", 2.0, 2.8, "oz"),
];

