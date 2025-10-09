export default function FoodInputForm() {
  return (
    <form
      className="max-w-md w-full mt-4 flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <label name="food">
        <input
          className="border-1 border-gray-300 rounded-l-lg p-2 w-full"
          name="food"
          type="text"
          placeholder="Search food (e.g Rice)"
        ></input>
      </label>
      <label name="price" className="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
          $
        </span>
        <input
          className="border-1 border-gray-300 rounded-r-lg p-2 w-full pl-5"
          name="price"
          type="number"
          placeholder="Enter price (e.g 3.50)"
        ></input>
      </label>
    </form>
  );
}
