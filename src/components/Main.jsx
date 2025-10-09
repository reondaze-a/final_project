import FoodInputForm from "./FoodComponents/FoodInputForm"
import FoodList from "./FoodComponents/FoodList"

export default function Main() {
  return (
    <main className="flex flex-col min-h-screen items-center mt-5 p-3 mb-10">
        <h2 className="font-bold">Welcome to Nutrition Per Dollar</h2>
        <p>Your go-to app for maximizing nutrition on a budget!</p>
        <FoodInputForm />
        <div className="divide my-10"></div>
        <FoodList />
    </main>
  )
}
