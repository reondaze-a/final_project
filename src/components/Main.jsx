import { useState } from "react"
import { fetchFoodData, selectFoodItem } from "../utils/foodDataCentralApi.js";
import { getNutrients } from "../utils/getNutrients.js";
import { defaultFoodItems, createFoodItem } from "../utils/defaultFoodItems.js";
import Home from "./Home.jsx";
import About from "./About.jsx";
import { Routes, Route } from "react-router-dom";

export default function Main() {
  const [foodList, setFoodList] = useState(defaultFoodItems);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");


  const validateForm = (form) => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Food name is required";
      setErrorText("Food name is required");
    }
    if (!form.price || isNaN(form.price) || parseFloat(form.price) <= 0) {
      newErrors.price = "Price must be a positive number";
      setErrorText("Price must be a positive number");
    }

    if (form.name.trim().length < 2) {
      newErrors.name = "Food name must be at least 2 characters long";
      setErrorText("Food name must be at least 2 characters long");
    }



    return Object.keys(newErrors).length === 0;
  };

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  
  const sortedFoodList = foodList.slice().sort((a, b) => b.proteinPerDollar - a.proteinPerDollar);


  const onRemove = (id) => {
    setFoodList((prevList) => prevList.filter((food) => food.id !== id));
  };
  
  const handleSubmit = (form) => {
    setIsLoading(true);

    if (!validateForm(form)) {
      setIsLoading(false);
      setIsError(true);


      setTimeout(() => {
        setIsError(false);
      }, 4000);

      return;
    }

    fetchFoodData(form.name)
      .then(data => selectFoodItem(data, form.name))
      .then(data => {
        
        if (!data) {
          const errText = "No suitable food item found, please try a different search term.";

          setErrorText(errText);
          throw new Error(errText);
        }
        const protein = getNutrients(data, "Protein"); // Extract protein content
        return { protein, data };
      })
      .then(({ protein, data }) => {
        setFoodList((prevList) => [
          createFoodItem( // Create new food item for the list
            Date.now().toString(),
            capitalizeFirstLetter(data.description),
            form.name, // store original query  
            parseFloat(form.price),
            protein,
            form.unit
          ),
          ...prevList
        ]);
      })
      .then(() => {
        setIsLoading(false);
        setIsError(false);
      })
      .catch(error => {
        console.error("Error fetching food data:", error);
        setIsLoading(false);
        setIsError(true);
      })
      .finally(() => {
        setTimeout(() => {
          setIsError(false);
          setErrorText("");
        }, 4000);
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
            isError={isError}
            errorText={errorText} 
          />
        }/>
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}
