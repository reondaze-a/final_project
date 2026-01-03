const api_key = import.meta.env.VITE_API_KEY;
const api_url = import.meta.env.VITE_API_URL;

export async function fetchFoodData(query) {
  const queryOptimized = query.trim().toLowerCase() + " raw"; // Append only during search, so original query stays untouched

  const response = await fetch(
    `${api_url}/search?api_key=${api_key}&query=${encodeURIComponent(queryOptimized)}&pageSize=20`,
  );

  const data = await response.json();
  return data.foods;
}

export const selectFoodItem = (foodData, query) => {
  const excludedType = "Branded";

  // Filters results and returns the first suitable food item

  return foodData.find((item => 
    item.dataType !== excludedType && 
    !item.brandName &&
    item.commonNames === "" &&
    item.description.toLowerCase().startsWith(query.toLowerCase()) &&
    item.foodNutrients?.some(nutrient => nutrient.nutrientName === "Protein")
  ));
}

