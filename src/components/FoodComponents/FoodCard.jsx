export default function FoodCard({
  name,
  protein,
  price,
  onRemove
}) {
  return (
    <div className="max-w-sm w-full justify-center shadow-lg rounded-lg p-4 border border-gray-300">
      <h2 className="font-bold text-lg text-center">{name}</h2>
      <p className="font-semibold mb-2 text-center">Price: ${price}</p>
      <p className="font-bold mb-4 text-center">{(protein / price).toFixed(2)}g protein / $</p>
      <div className="flex text-center gap-2 text-sm">
        <button className="bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors w-full">
          Add to Favorites
        </button>
        <button className="bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors w-full" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
