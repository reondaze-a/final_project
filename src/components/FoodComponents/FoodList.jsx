import FoodCard from "./FoodCard";

export default function FoodList({ foods, onRemove }) {

  return (
    <div className="max-w-md w-full grid sm:grid-cols-2 gap-6 justify-center">
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          protein={food.protein}
          unit={food.unit}
          onRemove={() => onRemove(food.id)}
        />
      ))}
    </div>
  );
}
