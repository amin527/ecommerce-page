import "./FilterPanel.css"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function FilterPanel(props) {
    let [sliderValues, setSliderValues] = useState([0, 500])
    let [searchTerm, setSearchTerm] = useState("")
    let [selectedTags, setSelectedTags] = useState([])
    let [tagFilterVisiblity, setTagFilterVisiblity] = useState(false)
    let [priceFilterVisibility, setPriceFilterVisibility] = useState(false)

    const allTags = ["Hot", "Low Stock", "Best Seller", "New Arrival", "On Sale", "Pre-Order ", "Premium", "Out of Stock", "Staff Pick"]

    useEffect(() => {
        props.setFilteredProducts(props.retrievedProducts.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [searchTerm])

    useEffect(() => {
        props.setFilteredProducts(props.retrievedProducts.filter(item => item.price >= sliderValues[0] && item.price <= sliderValues[1]))
    }, [sliderValues])

    useEffect(() => {
        props.setFilteredProducts(
            props.retrievedProducts.filter(item =>
                selectedTags.length === 0 ||
                selectedTags.every(tag => item.tags?.includes(tag))
            )
        );
    }, [selectedTags]);


    function selectHandler(item) {
        if (!selectedTags.includes(item)) {
            setSelectedTags([...selectedTags, item])
        }
    }
    function unselectHandler(item) {
        if (selectedTags.includes(item)) {
            setSelectedTags(selectedTags.filter(tag => tag !== item))
        }
    }
    return (
        <div className="filter-panel">
            <div className="filters">
                <div className="name-filter-container filter-container">
                    <input
                        placeholder="Search Name"
                        className="input-field"
                        type="text"
                        onChange={(input) => setSearchTerm(input.target.value)}
                    />
                </div>
                <div className="price-filter-container filter-container">
                    <div className="title" onClick={() => { priceFilterVisibility ? setPriceFilterVisibility(false) : setPriceFilterVisibility(true) }}>
                        Price Range
                        {priceFilterVisibility ? <IoIosArrowUp className="chevron" /> : <IoIosArrowDown className="chevron" />}
                    </div>

                    {priceFilterVisibility &&
                        <div className="slider-container">
                            <div class="price-range">£{sliderValues[0]} to £{sliderValues[1]}</div>
                            <RangeSlider className="slider" color={{}} max={500} value={sliderValues} onInput={setSliderValues} />
                        </div>
                    }
                </div>
                <div className="tag-filter-container filter-container">
                    <div className="title" onClick={() => { tagFilterVisiblity ? setTagFilterVisiblity(false) : setTagFilterVisiblity(true) }}>
                        Tag Filters
                        {tagFilterVisiblity ? <IoIosArrowUp className="chevron" /> : <IoIosArrowDown className="chevron" />}
                    </div>
                    {tagFilterVisiblity &&
                        <div className="tag-filter">
                            {allTags.map((item) => {
                                const isSelected = selectedTags.includes(item);
                                return (
                                    <div
                                        key={item}
                                        className={isSelected ? "tag-active" : "tag-inactive"}
                                        onClick={() => isSelected ? unselectHandler(item) : selectHandler(item)}
                                    >
                                        {item}
                                    </div>
                                );
                            })}
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
export default FilterPanel