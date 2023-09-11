import { useContext } from "react";
import { ContextUpdate, ContextValue } from "../../contexts/ContextProvider";
import Slider from "@mui/material/Slider";
import "../../assets/style/shopTools.css";
const ShopTools = () => {
  const { categoryList, priceFilter, selectedCategory } =
    useContext(ContextValue);
  const { onChooseCategory, priceRangeSelector } = useContext(ContextUpdate);
  return (
    <div className="filter-tool">
      <div className="filter-category">
        <div className="category-title">CATEGORIES</div>
        {categoryList.map((category, index) => (
          <button
            className={`category-btn
             ${selectedCategory === category[0] && "actived-filter"}`}
            key={index}
            onClick={() => onChooseCategory(category[0])}
          >
            <div className="type-category">{category[0]}</div>
            <div className="number-product-by-category">{category[1]}</div>
          </button>
        ))}
      </div>
      <div className="filter-price">
        <div className="category-title" style={{ marginBottom: 50 }}>
          PRICE
        </div>
        <div style={{ width: "100%" }}>
          <Slider
            value={priceFilter}
            onChange={priceRangeSelector}
            valueLabelDisplay="auto"
            max={400}
            min={0}
            disableSwap
            sx={{
              color: "black",
              background: "transparent",
              "& .MuiSlider-thumb": {
                borderRadius: "1px",
              },
            }}
          />
          <div>
            <span className="range-selected">Rage</span>: {priceFilter[0]} -{" "}
            {priceFilter[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopTools;
