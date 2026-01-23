import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="w-full bg-orange-500 relative text-white p-4 px-10 shadow-lg rounded-b-sm flex justify-between">
      <h1 className="text-lg font-bold">Protein Per Dollar</h1>
      <Navigation />
    </div>
  );
}
