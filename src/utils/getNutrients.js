export const getNutrients = (foodData, nutrient) => {
  const nutrientInfo = foodData.foodNutrients.find(item => item.nutrientName === nutrient);
  return nutrientInfo ? nutrientInfo.value : 0;
}

export const pricePerGram = (price, unit) => {
  switch (unit) {
    case "lb":
      return price / 453.592;
    case "oz":
      return price / 28.3495;
    case "g":
      return price;
    default:
      return NaN;
  }
}