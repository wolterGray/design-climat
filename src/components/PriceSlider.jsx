import Slider from "rc-slider";
import React from "react";

function PriceSlider({priceRange, setPriceRange}) {
  

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };
  return (
    <div className="mb-5">
      <h5 className="font-bold mb-5 text-xl">Ціна</h5>
      <div className="mb-5 flex justify-between">
        <input
          className="pl-1 w-[100px] outline-none border border-gray-200"
          type="number"
          placeholder="0"
          onChange={(elem) => setPriceRange([elem.target.value, priceRange[1]])}
          value={priceRange[0]}
          min={0}
          max={100000}
          pattern="\d*"
        />
        <div className="flex gap-2">
          <input
            className="pl-1 w-[100px] outline-none border border-gray-200"
            type="number"
            placeholder="0"
            onChange={(elem) =>
              setPriceRange([priceRange[0], elem.target.value])
            }
            value={priceRange[1]}
            min={0}
            max={100000}
            pattern="\d*"
          />
          <span>грн.</span>
        </div>
      </div>
      <Slider
        min={0}
        max={100000}
        className="text-red-500"
        range
        defaultValue={priceRange}
        value={priceRange}
        onChange={handlePriceChange}
      />
    </div>
  );
}

export default PriceSlider;
