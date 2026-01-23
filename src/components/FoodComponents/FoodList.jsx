import FoodCard from "./FoodCard";

export default function FoodList({ foods, onRemove }) {

  return (
    <div className="max-w-md w-full grid sm:grid-cols-2 gap-6 justify-center">
      {foods.map((food, index) => (
        <FoodCard
          rank={index + 1}
          key={food.id}
          id={food.id}
          name={food.name}
          query={food.query}
          price={food.price}
          protein={food.protein}
          unit={food.unit}
          pricePer100g={food.pricePer100g}
          proteinPerDollar={food.proteinPerDollar}
          onRemove={() => onRemove(food.id)}
        />
      ))}
    </div>
  );
}
