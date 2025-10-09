import FoodCard from "./FoodCard";

export default function FoodList() {
  return (
    <div className="max-w-md w-full grid sm:grid-cols-2 gap-6 justify-center">
      <FoodCard name="Rice" price={`$${3.5}`} calories={250} protein={10} />
      <FoodCard
        name="Peanut Butter"
        price={`$${3.5}`}
        calories={250}
        protein={10}
      />
      <FoodCard name="Eggs" price={`$${6.12}`} calories={250} protein={10} />
      <FoodCard name="Eggs" price={`$${6.12}`} calories={250} protein={10} />
      <FoodCard name="Eggs" price={`$${6.12}`} calories={250} protein={10} />   
    </div>
  );
}
