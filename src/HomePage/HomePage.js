import FilterPanel from "../FilterPanel/FilterPanel";
import Navbar from "../NavBar/NavBar";
import BasketPanel from "../BasketPanel/BasketPanel";
import "./HomePage.css"
import ItemCard from "../ItemCard/HomeItemCard"
import { useEffect, useState } from "react"
import { useContext } from "react";
import { displayModesContext } from "../App";

function HomePage(props) {
  const [numberOfColumns, setNumberOfColumns] = useState(null)
  let {displayMode} = useContext(displayModesContext)
  useEffect(() => {
      if (displayMode === "small") {
        setNumberOfColumns(2);
      } else if (displayMode === "medium") {
        setNumberOfColumns(3);
      } else {
        setNumberOfColumns(4);
      }
  }, [displayMode])

  let [columns, setColumns] = useState(() => Array.from({ length: numberOfColumns }, () => []))

  useEffect(() => {
    if (props.filteredProducts !== undefined) {
      let tempColumns = Array.from({ length: numberOfColumns }, () => []);
      for (let i = 0; i < numberOfColumns; i++) {
        for (let j = 0; j < props.filteredProducts.length; j++) {
          if (j % numberOfColumns === i) {
            tempColumns[i].push(props.filteredProducts[j])
          }
        }
      }
      console.log(tempColumns)
      setColumns(tempColumns)
    }
  }, [props.filteredProducts, numberOfColumns])

  function setGridStyling(){
    if (displayMode === "small") {
        return({
          gridTemplateColumns: 'repeat(2, 1fr)',
          padding: '0 30px'
        })
      } else if (displayMode === "medium") {
        return({
          gridTemplateColumns: 'repeat(3, 1fr)',
          padding: '0 30px'
        })
      } else {
        return({
          gridTemplateColumns: 'repeat(4, 1fr)',
          padding: '0 30px'
        })
      }
  }

  return (
    <div className="home-page">
      <div className="standard-body">
        <Navbar displayBasketButton={true} displayHomeButton={false} />
        <div className="bottom-half">
          <FilterPanel retrievedProducts={props.retrievedProducts} setFilteredProducts={props.setFilteredProducts} />
          <div className="home-page-content" style={setGridStyling()}>
            {columns.map((column, index) => <div key={index} className="column">{columns[index].map((item) => <ItemCard key={item.id} item={item} Basket={props.Basket} setBasket={props.setBasket}></ItemCard>)}</div>)}
          </div>
        </div>
      </div>
      {props.Basket.length > 0 && <BasketPanel Basket={props.Basket} setBasket={props.setBasket} retrievedProducts={props.retrievedProducts} />}
    </div>
  );
}
export default HomePage;
