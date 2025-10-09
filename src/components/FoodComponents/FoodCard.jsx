export default function FoodCard({
  name,
  calories,
  protein,
  carbs,
  fats,
  price,
}) {
  return (
    <div className="max-w-sm w-full justify-center shadow-lg rounded-lg p-4 border border-gray-300">
      <h2 className="font-bold text-lg mb-2 text-center">{name} {price}</h2>
      <ul className="list-inside mb-4 justify-center">
        <li>Calories: {calories} kcal</li>
        <li>Protein: {protein} g</li>
        <li>Carbohydrates: {carbs} g</li>
      </ul>
    </div>
  );
}
