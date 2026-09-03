import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage/HomePage";
import BasketPage from "./BasketPage/BasketPage";
import { useState, useEffect } from "react";
import { createContext } from 'react';
import "./App.css"

export const displayModesContext = createContext()

function App() {
  let [Basket, setBasket] = useState([])
  let [retrievedProducts, setRetrievedProducts] = useState([])
  let [filteredProducts, setFilteredProducts] = useState([])
  let [displayMode, setDisplayMode] = useState(null)

  useEffect(() => {
    function updateColumns() {
      if (window.innerWidth < 500) {
        setDisplayMode("small");
      } else if (window.innerWidth < 1150) {
        setDisplayMode("medium");
      } else {
        setDisplayMode("large");
      }
    }
    updateColumns()
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [])

  useEffect(() => {
    setRetrievedProducts([
      { id: 1, name: "Midnight Mischief", price: 109.99, imgSource: "/Images/1.jpg", tags: ["Pre-Order", "Staff Pick"] },
      { id: 2, name: "Journey Through Dream Valley", price: 100, imgSource: "/Images/2.jpg", tags: ["Hot", "Best Seller"] },
      { id: 3, name: "Autumn Embrace", price: 130, imgSource: "/Images/3.jpg", tags: ["Premium", "Staff Pick"] },
      { id: 4, name: "Galactic Groove", price: 52, imgSource: "/Images/4.jpg", tags: ["On Sale", "Low Stock"] },
      { id: 5, name: "Tea Garden Dragon", price: 55, imgSource: "/Images/5.jpg", tags: ["Hot", "New Arrival"] },
      { id: 6, name: "Sunny Mood", price: 100, imgSource: "/Images/6.jpg", tags: ["Best Seller", "Staff Pick"] },
      { id: 7, name: "Offbeat Traveler", price: 190, imgSource: "/Images/7.jpg", tags: ["Premium", "Low Stock"] },
      { id: 8, name: "Whispering Woods", price: 100, imgSource: "/Images/8.jpg", tags: ["Best Seller", "On Sale"] },
      { id: 9, name: "Paradise Hour", price: 95, imgSource: "/Images/9.jpg", tags: ["Hot", "New Arrival"] },
      { id: 10, name: "Vulpine Flame", price: 65, imgSource: "/Images/10.jpg", tags: ["Low Stock", "On Sale"] },
      { id: 11, name: "Ocean Lanterns", price: 155, imgSource: "/Images/11.jpg", tags: ["Premium", "Best Seller"] },
      { id: 12, name: "Liquid Sunshine", price: 110, imgSource: "/Images/12.jpg", tags: ["Hot", "New Arrival"] },

    ])
  }, [])

  useEffect(() => {
    setFilteredProducts(retrievedProducts)
  }, [retrievedProducts])

  return (
    <displayModesContext.Provider value={{ displayMode: displayMode }}>
      <Routes>
        <Route path="/home" element={<HomePage Basket={Basket} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} setBasket={setBasket} retrievedProducts={retrievedProducts} />}></Route>
        <Route path="/" element={<HomePage Basket={Basket} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} setBasket={setBasket} retrievedProducts={retrievedProducts} />}></Route>
        <Route path="/basket" element={<BasketPage Basket={Basket} setBasket={setBasket} retrievedProducts={retrievedProducts} baseket={Basket} />}></Route>
      </Routes>
    </displayModesContext.Provider>
  )
}
export default App;
