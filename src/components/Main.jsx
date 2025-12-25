import { useState, useEffect } from "react"
import { fetchFoodData } from "../services/foodApi.js";
import { getNutrients } from "../utils/getNutrients.js";
import { defaultFoodItems } from "../utils/defaultFoodItems.js";
import FoodInputForm from "./FoodComponents/FoodInputForm"
import FoodList from "./FoodComponents/FoodList"

export default function Main() {
  const [foodData, setFoodData] = useState(null);
  const [foodList, setFoodList] = useState(defaultFoodItems);

  const onRemove = (id) => {
    setFoodList((prevList) => prevList.filter((food) => food.id !== id));
  }
  
  useEffect(() => {
    fetchFoodData("banana")
      .then((data) => {
        console.log("Fetched food data:", data);
        setFoodData(data);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, []); // to show example food data on initial load

  const handleSubmit = (form) => {
    console.log("Form submitted with data:", form);

    fetchFoodData(form.name)
      .then(data => {
        const protein = getNutrients(data, "Protein"); // Extract protein content
        console.log("Fetched food data:", protein);
        return protein;
      })
      .then((protein) => {
        setFoodList((prevList) => [
          { name: form.name, price: parseFloat(form.price), protein: protein, id: crypto.randomUUID(), unit: form.unit },
          ...prevList,
        ]);
      })
      .catch(error => {
        console.error("Error fetching food data:", error);
      });

    
  };

  return (
    <main className="flex flex-col min-h-screen items-center mt-5 p-3 mb-10">
      <h2 className="font-bold">Welcome to Protein Per Dollar</h2>
      <p>Your go-to app for maximizing protein on a budget!</p>
      <div className="flex max-w-md text-center text-sm my-7">
        <p className="italic">
          Note: Protein values are sourced from USDA FoodData Central. Values
          may be based on either per 100g or per serving, depending on the food
          record. Prices are normalized to $/100g for comparison. Results are
          intended for relative comparison, not precise nutrition tracking.
        </p>
      </div>

      <FoodInputForm handleSubmit={handleSubmit} />
      <div className="divide my-10"></div>
      <FoodList foods={foodList} foodData={foodData} onRemove={onRemove} />
    </main>
  );
}
