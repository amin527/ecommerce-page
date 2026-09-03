import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import BasketItemCard from "../ItemCard/BasketItemCard";
import "./BasketPage.css"

function BasketPage(props) {
  useEffect(() => {
    console.log(props.retrievedProducts);
    console.log(props.Basket);
    console.log(props.retrievedProducts.filter(item => props.Basket.includes(item.id)));
  }, [props]);

  const itemsInBasket = props.retrievedProducts.filter(item => props.Basket.includes(item.id));

  return (
    <div className="basket-page">
        <NavBar displayBasketButton={false} displayHomeButton={true} />
        
        {props.Basket.length > 0 ? 
            <div class="basket-page-content">{itemsInBasket.map(item => <BasketItemCard item={item} Basket= {props.Basket} setBasket={props.setBasket}></BasketItemCard>)}</div>
        : 
            <div>Basket is empty</div>
        }
        </div>
  );
}

export default BasketPage;
