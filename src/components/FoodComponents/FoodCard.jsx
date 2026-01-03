

export default function FoodCard({
  rank,
  name,
  query,
  price,
  unit,
  pricePer100g,
  proteinPerDollar,
  onRemove
}) {
  
  return (
    <div className="flex relative flex-col w-53 h-55 box-border justify-between shadow-lg rounded-lg p-4 pt-7 border border-gray-300 animate-fade-in">
      <p className="absolute top-2 left-3 text-sm">
        #{rank}
      </p>
      <h2 className="font-bold text-lg text-center line-clamp-2">
        {name.split(',')[0].trim()} {/* Show only main name before comma */}
      </h2>
      <p className="text-center">
        ({query})
      </p>
      <p className="font-semibold text-center">
        Price: ${price}/{unit} ({pricePer100g}$/100g)
      </p>
      <p className="font-bold text-center">
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
