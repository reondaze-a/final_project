import { useState, useEffect } from "react"
import { fetchFoodData, selectFoodItem } from "../services/foodApi.js";
import { getNutrients } from "../utils/getNutrients.js";
import { defaultFoodItems, createFoodItem } from "../utils/defaultFoodItems.js";
import Home from "./Home.jsx";
import About from "./About.jsx";
import { Routes, Route } from "react-router-dom";

export default function Main() {
  const [foodData, setFoodData] = useState(null);
  const [foodList, setFoodList] = useState(defaultFoodItems);

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  
  const sortedFoodList = foodList.slice().sort((a, b) => b.proteinPerDollar - a.proteinPerDollar);

  const onRemove = (id) => {
    setFoodList((prevList) => prevList.filter((food) => food.id !== id));
  }

  useEffect(() => {
    fetchFoodData("banana")
      .then((data) => {
        console.log("Fetched food data:", data);
        setFoodData(selectFoodItem(data));
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, []); // to show example food data on initial load

  const handleSubmit = (form) => {
    console.log("Form submitted with data:", form);

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
      .catch(error => {
        console.error("Error fetching food data:", error);
      });
  };

  return (
    <main className="flex flex-col min-h-screen items-center mt-5 p-3 mb-10">
      <Routes>
        <Route path="/" element={
          <Home 
            handleSubmit={handleSubmit} 
            sortedFoodList={sortedFoodList} 
            onRemove={onRemove} 
            foodData={foodData} 
          />
        }/>
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}
