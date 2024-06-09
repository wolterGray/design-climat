import React from "react";

function ControlledCheckbox({item, id, productFilter = () => {}}) {
  const [checked, setChecked] = React.useState(false);

  function changeCheckbox() {
    productFilter(item, id, checked);
  }
  React.useEffect(() => {
    changeCheckbox();
  }, [checked]);
  return (
    <div className="flex gap-2 ml-3 text-sm font-medium text-gray-500 mb-1">
      <input
        type="checkbox"
        id={`checkbox${item}`}
        name={`option${item}`}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor={`checkbox${item}`}>{item}</label>
    </div>
  );
}

export default ControlledCheckbox;
