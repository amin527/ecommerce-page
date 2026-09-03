import "./BasketItemCard.css"

function BasketItemCard(props) {

    const name = props.item.name
    const price = props.item.price
    const imgSource = props.item.imgSource

    return (
        <div className="item-card">
            <div className="image-container">
                <img className="img" src={imgSource} alt=""/>
            </div>
            <div className="item-card-content">
                <div id="name">{name}</div>
                <div className="bottom-half">
                    <div className="price">£{price}</div>
                    <div>Count</div>
                    <div>Remove</div>
                </div>
            </div>
        </div>
    )
}
export default BasketItemCard