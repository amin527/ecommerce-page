import "./HomeItemCard.css"
import { IoBagCheck } from "react-icons/io5";

function HomeItemCard(props) {
    const name = props.item.name
    const price = props.item.price
    const imgSource = props.item.imgSource
    const tags = props.item.tags

    function clickHandler() {
        props.setBasket([...props.Basket, props.item.id]);
    }

    function itemInBasket() {
        if (props.Basket.filter(item => item === props.item.id).length > 0) {
            return true
        } else return false
    }

    function itemHasTags() {
        if (tags.length > 0) { return true } else { return false }
    }

    function printTags() {
        return (
            <div className="tag-container">
                {tags.slice(0, -1).map((tag) => {
                    return (
                        <span>
                            <div className="tag">{tag}</div>
                            <div className="circle"></div>
                        </span>
                    )
                })}
                <div className="tag">{tags.at(-1)}</div>
            </div>
        )
    }

    return (
        <div className="item-card">
            <div className="image-container">
                <img className="img" src={imgSource} alt=""></img>
                {itemInBasket() && <IoBagCheck size={"1.5em"} className="basket-flag"/> }
                {itemHasTags() && printTags()}
            </div>

            <div className="item-card-content">
                <div id="name">{name}</div>
                <div className="bottom-half">
                    <div className="price">£{price}</div>
                    <div className="ButtonContainer">
                        <div className="Button" onClick={clickHandler}>Add to Basket</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default HomeItemCard