export default function About() {
  return (
    <div className="flex flex-col text-center max-w-lg p-6">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">About Protein per Dollar</h2>
        <p className="mb-4">
          Protein Per Dollar is a frontend web application designed to help
          users compare foods based on how much protein they provide relative to
          cost. Instead of focusing on calories or macros alone, the app
          emphasizes value efficiency—helping users identify which foods deliver
          the most protein for their money. This project combines user-entered
          price data with nutrition data from the USDA to produce a simple,
          ranked comparison.
        </p>
      </div>
      <div className="flex flex-col text-left mt-4">
        <h3 className="text-xl font-bold mb-2 self-center">How It Works</h3>
        <h4 className="font-semibold mt-2">1. Food Search</h4>
        <p className="mb-2">
          Users enter a food name (e.g., banana, chicken breast) and a price per
          unit (lb, oz, or g).
        </p>
        <h4 className="font-semibold mt-2">2. Nutrition Data</h4>
        <p className="mb-2">
          Protein values are fetched from the USDA FoodData Central API. For
          whole foods, the app prioritizes non-branded results (e.g., “banana,
          raw”) to avoid processed or mixed products.
        </p>
        <h4 className="font-semibold mt-2">3. Price Normalization</h4>
        <p className="mb-2">
          User-entered prices are normalized to price per 100 grams, regardless of whether 
          the original input was per pound, ounce, or gram.
        </p>
        <h4 className="font-semibold mt-2">4. Protein per Dollar Calculation</h4>
        <p className="mb-2">
          The app calculates grams of protein provided per dollar spent using the
          formula: Protein per Dollar = (Protein per 100g) / (Price per 100g)
        </p>
        <h4 className="font-semibold mt-2">5. Ranked Results</h4>
        <p className="mb-2">
          Foods are displayed in a ranked list, sorted by protein per dollar in
          descending order. Each entry shows the food name, price details, and
          protein efficiency.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 self-center mt-4">Data Source</h3>
        <p className="text-left">
          Nutrition data is sourced from the
          <a
            href="https://fdc.nal.usda.gov/"
            target="_blank"
            className="text-blue-500 underline mx-1"
          >
            USDA FoodData Central
          </a>
          database, which provides comprehensive nutrient profiles for a wide
          range of foods. Protein values are extracted directly from the returned food 
          nutrient data when available.
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold mb-2 self-center mt-4">Assumptions & Limitations</h3>
        <ul className="list-disc text-left">
          <li>Protein values from USDA may be reported per 100g or per serving, depending on the food record and dataset type.</li>
          <li>Prices are manually entereted by the user and may vary by store, brand, or location.</li>
          <li>The app is intended for relative comparison, not precise dietary planning or medical use.</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold mb-2 self-center mt-4">About the Author</h3>
        <p>
          This project was created by Abraham Efraim, a software developer.
        </p>
      </div>
    </div>
  );
}