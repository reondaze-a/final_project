import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="w-full bg-orange-500 text-white p-4 px-10 shadow-lg rounded-b-sm flex justify-between">
      <h1>Nutrition Per Dollar</h1>
      <Navigation />
    </div>
  );
}
