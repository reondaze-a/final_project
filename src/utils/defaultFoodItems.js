import { pricePer100Gram, proteinPerDollar } from "./getNutrients.js";

export const createFoodItem = (id, name, query, price, protein, unit) => {
  return {
    id,
    name,
    query,
    price,
    protein,
    unit,
    pricePer100g: pricePer100Gram(price, unit),
    proteinPerDollar: proteinPerDollar(protein, price, unit)
  };
}

export const defaultFoodItems = [
  createFoodItem("1", "Apple (Sample)", "Apple", 1.2, 0.3, "oz"),
  createFoodItem("2", "Banana (Sample)", "Banana", 0.5, 0.74, "lb"),
  createFoodItem("3", "Chicken Breast (Sample)", "Chicken Breast", 5.0, 31, "lb"),
  createFoodItem("4", "Broccoli (Sample)", "Broccoli", 2.0, 2.8, "oz"),
];

