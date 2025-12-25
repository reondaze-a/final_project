import FoodCard from "./FoodCard";

export default function FoodList({ foods, onRemove }) {

  return (
    <div className="max-w-md w-full grid sm:grid-cols-2 gap-6 justify-center">
      {foods.map((food, index) => (
        <FoodCard
          key={index}
          name={food.name}
          price={food.price}
          protein={food.protein}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
