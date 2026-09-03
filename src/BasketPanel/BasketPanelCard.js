import "./BasketPanelCard.css"

function BasketPanelCard(props) {
    function itemsInBasket() {
        if (props.Basket.filter(item => item === props.item.id).length > 0) {
            return true
        } else return false
    }
    function increaseCount() {
        props.setBasket([...props.Basket, props.item.id]);
    }
    function decreaseCount() {
        const index = props.Basket.indexOf(props.item.id);
        if (index !== -1) {
            const newBasket = [...props.Basket];
            newBasket.splice(index, 1); 
            props.setBasket(newBasket);
        }
    }
    return (
        <div className="basket-panel-card">
            <div className="top-half">
                <div className="image-container">
                    <img src={props.item.imgSource} alt=""></img>
                </div>
                <div className="price">£{props.item.price}</div>
            </div>
            {itemsInBasket() &&
                <div className="count-adjuster-section">
                    <div className="count-adjuster" onClick={decreaseCount} >-</div>
                    <div className="count">{props.Basket.filter(item => item === props.item.id).length}</div>
                    <div className="count-adjuster" onClick={increaseCount}>+</div>
                </div>
            }
        </div>
    )
}
export default BasketPanelCard