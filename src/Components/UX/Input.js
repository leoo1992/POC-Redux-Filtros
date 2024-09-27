import React from "react";
import PropTypes from "prop-types";

const Input = ({ id, text, type, value, setValue }) => {
  const handleInputChange = ({ target }) => {
    let newValue = target.value,
      regex = /^\d*\.?\d*$/;

    if (type !== "number") return setValue(newValue);

    if (regex.test(newValue)) {
      setValue(newValue);
    }
  };

  const handleKeyDown = (e) => {
    if (type === "number") {
      if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
        e.preventDefault();
      }
    }
  };

  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={text}
        value={value}
        onChange={handleInputChange}
        pattern={type === "number" ? "[0-9]*" : ""}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Input;
