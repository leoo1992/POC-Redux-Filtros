import React from "react";
import PropTypes from "prop-types";

const CheckBox = ({ text, value, variable, setVariable }) => {
  function handleChangeCheckBox({ target }) {
    if (target.checked) {
      setVariable([...variable, target.value.toLowerCase()]);
    } else {
      setVariable(variable.filter((color) => color !== target.value.toLowerCase()));
    }
  }

  function handleChecked(color) {
    return variable.includes(color.toLowerCase());
  }

  return (
    <label>
      <span>{text}</span>
      <input
        type="checkbox"
        value={value.toLowerCase()}
        checked={handleChecked(value.toLowerCase())}
        onChange={handleChangeCheckBox}
      />
    </label>
  );
};

CheckBox.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variable: PropTypes.array.isRequired,
  setVariable: PropTypes.func.isRequired,
};

export default CheckBox;
