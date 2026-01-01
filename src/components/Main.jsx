import { useState, useEffect } from "react"
import { fetchFoodData, selectFoodItem } from "../services/foodApi.js";
import { getNutrients } from "../utils/getNutrients.js";
import { defaultFoodItems, createFoodItem } from "../utils/defaultFoodItems.js";
import Home from "./Home.jsx";
import About from "./About.jsx";
import { Routes, Route } from "react-router-dom";

export default function Main() {
  const [foodList, setFoodList] = useState(defaultFoodItems);
  const [isLoading, setIsLoading] = useState(false);

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  
  const sortedFoodList = foodList.slice().sort((a, b) => b.proteinPerDollar - a.proteinPerDollar);

  const onRemove = (id) => {
    setFoodList((prevList) => prevList.filter((food) => food.id !== id));
  };
  
  const handleSubmit = (form) => {
    console.log("Form submitted with data:", form);
    setIsLoading(true);

    fetchFoodData(form.name)
      .then(data => selectFoodItem(data))
      .then(data => {
        const protein = getNutrients(data, "Protein"); // Extract protein content
        console.log("Fetched food data:", data, "Protein:", protein);
        return protein;
      })
      .then((protein) => {
        setFoodList((prevList) => [
          createFoodItem(
            Date.now().toString(),
            capitalizeFirstLetter(form.name),
            parseFloat(form.price),
            protein,
            form.unit
          ),
          ...prevList
        ]);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching food data:", error);
      });
  };

  return (
    <main className="flex flex-col min-h-screen items-center mt-5 p-3 pb-10">
      <Routes>
        <Route path="/" element={
          <Home 
            handleSubmit={handleSubmit} 
            sortedFoodList={sortedFoodList} 
            onRemove={onRemove}
            isLoading={isLoading} 
          />
        }/>
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}
