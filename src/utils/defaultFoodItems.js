import { pricePerGram, proteinPerDollar } from "./getNutrients.js";

export const defaultFoodItems = [
  { id: "1", name: "Apple", price: 1.20, protein: 0.3, unit: "oz", pricePer100g: pricePerGram(1.20, "oz"), proteinPerDollar: proteinPerDollar(0.3, 1.20, "oz") },
  { id: "2", name: "Banana", price: 0.50, protein: 1.3, unit: "lb", pricePer100g: pricePerGram(0.50, "lb"), proteinPerDollar: proteinPerDollar(1.3, 0.50, "lb") },
  { id: "3", name: "Chicken Breast", price: 5.0, protein: 31, unit: "lb", pricePer100g: pricePerGram(5.0, "lb"), proteinPerDollar: proteinPerDollar(31, 5.0, "lb") },
  { id: "4", name: "Broccoli", price: 2.0, protein: 2.8, unit: "oz", pricePer100g: pricePerGram(2.0, "oz"), proteinPerDollar: proteinPerDollar(2.8, 2.0, "oz") },
];

