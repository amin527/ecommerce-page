
import "./BasketPanel.css"
import { useCallback, useEffect, useState } from "react"
import BasketPanelCard from "./BasketPanelCard"

function BasketPanel(props) {

    let [subTotal, setSubTotal] = useState(0)
    const unieueItemsInBasket = props.retrievedProducts.filter(item => props.Basket.includes(item.id));

    const itemsInBasket = useCallback(() => {
        let basket = []
        for (const itemID of props.Basket) {
            basket.push(props.retrievedProducts.find(item => item.id === itemID))
        }
        return basket
    }, [props])

    useEffect(() => {
        const basket = itemsInBasket()
        let total = 0
        for (const item of basket) {
            console.log(item.price)
            total = total + item.price
        }
        setSubTotal(total)
    }, [props.Basket, itemsInBasket])

    return (
        <div className="basket-panel">
            <div className="basket-panel-content">
                <div className="sub-total">Subtotal: £{subTotal}</div>
                {unieueItemsInBasket.map((item) => {
                    return (
                        <BasketPanelCard item={item} setBasket={props.setBasket} Basket={props.Basket} />
                    )
                })}
                <div className="checkout-button">Checkout</div>
            </div>
        </div>
    )
}
export default BasketPanel