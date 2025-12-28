export const getNutrients = (foodData, nutrient) => {
  const nutrientInfo = foodData.foodNutrients.find(item => item.nutrientName === nutrient);
  return nutrientInfo ? nutrientInfo.value : 0;
}

export const pricePer100Gram = (price, unit) => {
  let result;
  switch (unit) {
    case "lb":
      result = (price / 453.592) * 100;
      break;
    case "oz":
      result = (price / 28.3495) * 100;
      break;
    case "g":
      result = price;
      break;
    default:
      return NaN;
  }
  return Number(result.toFixed(2));
}

export const proteinPerDollar = (protein, price, unit) => {
  const ppg = pricePer100Gram(price, unit);
  const proteinPerDollar = protein / ppg;
  return Number(proteinPerDollar.toFixed(2));
}