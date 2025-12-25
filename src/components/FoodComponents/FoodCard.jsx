import { pricePerGram } from "../../utils/getNutrients";

export default function FoodCard({
  name,
  protein, // per 100g
  price,
  unit,
  onRemove
}) {
  const ppg = pricePerGram(price, unit);
  const pricePer100g = ppg * 100;
  const proteinPerDollar = protein / pricePer100g;
  
  return (
    <div className="flex flex-col max-w-sm w-full justify-between shadow-lg rounded-lg p-4 border border-gray-300">
      <h2 className="font-bold text-lg text-center">{name}</h2>
      <p className="font-semibold mb-2 text-center">
        Price: ${price}/{unit} ({pricePer100g.toFixed(2)}$/100g)

      </p>
      <p className="font-bold mb-4 text-center">
        {proteinPerDollar.toFixed(2)}g protein / $
      </p>
      <div className="flex text-center gap-2 text-sm">
        <button className="bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors w-full">
          Add to Favorites
        </button>
        <button
          className="bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors w-full"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
