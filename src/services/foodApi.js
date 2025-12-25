const api_key = import.meta.env.VITE_API_KEY;
const api_url = import.meta.env.VITE_API_URL;

export async function fetchFoodData(query) {
  const response = await fetch(
    `${api_url}/search?api_key=${api_key}&query=${encodeURIComponent(query)}&pageSize=20`,
  );
  const dataType = "Branded"; // reliable food data

  const data = await response.json();
  const foodItem = data.foods.find(item => item.dataType === dataType); // Find first item with the desired dataType
  return foodItem || null; 
}

