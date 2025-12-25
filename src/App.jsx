import { useState, useEffect } from 'react'
import { fetchFoodData } from './services/foodApi.js'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    fetchFoodData("banana")
      .then(data => {
        console.log("Fetched food data:", data);
        setFoodData(data);
      })
      .catch(error => {
        console.error("Error fetching food data:", error);
      });
  }, []);

  return (
    <div className="max-w-screen">
      <Header />
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
