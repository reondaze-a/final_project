import { useState, useEffect } from "react"
import { fetchFoodData } from "../services/foodApi.js";
import { getNutrients } from "../utils/getNutrients.js";
import { defaultFoodItems } from "../utils/defaultFoodItems.js";
import FoodInputForm from "./FoodComponents/FoodInputForm"
import FoodList from "./FoodComponents/FoodList"

export default function Main() {
  const [foodData, setFoodData] = useState(null);
  const [foodList, setFoodList] = useState(defaultFoodItems);

  const onRemove = () => {
    console.log("Remove button clicked in Main component");
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
          { name: form.name, price: parseFloat(form.price), protein: protein },
          ...prevList,
        ]);
      })
      .catch(error => {
        console.error("Error fetching food data:", error);
      });

    
  };

  return (
    <main className="flex flex-col min-h-screen items-center mt-5 p-3 mb-10">
      <h2 className="font-bold">Welcome to Nutrition Per Dollar</h2>
      <p>Your go-to app for maximizing nutrition on a budget!</p>
      <p className="italic text-sm mt-3">Data based on USDA's FoodDataCentral</p>
      <FoodInputForm handleSubmit={handleSubmit} />
      <div className="divide my-10"></div>
      <FoodList foods={foodList} foodData={foodData} onRemove={onRemove}/>
    </main>
  );
}
