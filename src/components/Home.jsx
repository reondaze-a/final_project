import FoodInputForm from "./FoodComponents/FoodInputForm"
import FoodList from "./FoodComponents/FoodList"

export default function Home({ handleSubmit, sortedFoodList, onRemove }) {
  return (
    <>
      <h2 className="font-bold text-center">Welcome to Protein Per Dollar</h2>
      <p className="text-center">Your go-to app for maximizing protein on a budget!</p>
      <div className="flex flex-col max-w-lg text-center text-sm mt-7 mb-15">
        <p className="italic">
          Note: Protein values are sourced from USDA FoodData Central. Values
          may be based on either per 100g or per serving, depending on the food
          record. Prices are normalized to $/100g for comparison. Results are
          intended for relative comparison, not precise nutrition tracking.
        </p>
        <FoodInputForm handleSubmit={handleSubmit} />
      </div>

      <div className="flex flex-col align-center">
        <FoodList
          foods={sortedFoodList}
          onRemove={onRemove}
        />
      </div>
    </>
  );
}