export const getNutrients = (foodData, nutrient) => {
  const nutrientInfo = foodData.foodNutrients.find(item => item.nutrientName === nutrient);
  return nutrientInfo ? nutrientInfo.value : 0;
}