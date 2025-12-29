

export default function FoodCard({
  rank,
  name,
  price,
  unit,
  pricePer100g,
  proteinPerDollar,
  onRemove
}) {
  
  return (
    <div className="flex relative flex-col max-w-sm w-full justify-between shadow-lg rounded-lg p-4 border border-gray-300 animate-fade-in">
      <p className="absolute top-2 left-3 text-sm">
        #{rank}
      </p>
      <h2 className="font-bold text-lg text-center">{name}</h2>
      <p className="font-semibold mb-2 text-center">
        Price: ${price}/{unit} ({pricePer100g}$/100g)
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
