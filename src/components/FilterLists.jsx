import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ControlledCheckbox from "./ControlledCheckbox";

function FilterLists({ filterList, productFilter }) {
  const [openList, setOpenList] = React.useState(false);

  return (
    <div className="mb-2 border-b border-gray-200 select-none">
      <div
        onClick={() => setOpenList(!openList)}
        className="flex justify-between cursor-pointer items-center font-bold mb-2 text-md">
        <h5>{filterList.title}</h5>
        <p>{openList ? "-" : "+"}</p>
      </div>
      <AnimatePresence>
        {openList && (
          <motion.ul
            initial={{ height: 0, overflow: "hidden" }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ height: { duration: 0.3 } }}>
            {filterList.items.map((item) => (
              <ControlledCheckbox
                key={item}
                item={item}
                id={filterList.id}
                productFilter={productFilter}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FilterLists;
