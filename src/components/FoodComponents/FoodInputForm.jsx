export default function FoodInputForm() {
  return (
    <div className="">
      <label name="food">
        <input className="border-1 border-gray-300 rounded-lg p-2" name="food" type="text" placeholder="Search food (e.g 'Peanut Butter')"></input>
      </label>
    </div>
  )
}