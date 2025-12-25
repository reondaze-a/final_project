import { useState } from "react";

export default function FoodInputForm({ handleSubmit }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    unit: "lb",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      className="max-w- w-full mt-4 flex justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(form);
      }}
    >
      <label>
        <input
          className="border-1 border-gray-300 rounded-l-lg p-2 w-full h-10"
          name="name"
          type="text"
          placeholder="Search food"
          value={form.name}
          onChange={handleChange}
        ></input>
      </label>
      <label className="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
          $
        </span>
        <input
          className="border-1 border-gray-300 p-2 w-full pl-5 h-10"
          name="price"
          type="number"
          placeholder="Enter price"
          value={form.price}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        <select
          className="border-1 border-gray-300 rounded-r-lg p-1 w-full h-10 shrink-0 min-w-[50px]"
          name="unit"
          onChange={handleChange}
          value={form.unit}
        >
          <option value="lb">lb</option>
          <option value="oz">oz</option>
          <option value="g">g</option>
        </select>
      </label>
      <button
        className="bg-orange-500 text-white rounded-lg p-2 h-10 px-4 hover:bg-orange-600 hover:cursor-pointer ml-1"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
