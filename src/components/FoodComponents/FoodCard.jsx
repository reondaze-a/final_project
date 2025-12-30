

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
    <div className="flex relative flex-col w-53 h-46.5 box-border justify-between shadow-lg rounded-lg p-4 border border-gray-300 animate-fade-in">
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
      <div className="flex text-center">
        <button
          className="bg-orange-500 cursor-pointer text-white rounded hover:bg-orange-600 transition-colors duration-150 w-full h-full"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
