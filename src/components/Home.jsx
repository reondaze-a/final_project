import FoodInputForm from "./FoodComponents/FoodInputForm"
import FoodList from "./FoodComponents/FoodList"

export default function Home({ handleSubmit, sortedFoodList, onRemove, foodData }) {
  return (
    <>
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
      <FoodList foods={sortedFoodList} foodData={foodData} onRemove={onRemove} />
    </>
  )
}