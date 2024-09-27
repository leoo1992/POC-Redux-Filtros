import React from "react";

const Filters = () => {
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [selectedColors, setSelectedColors] = React.useState([]);

  function handleSubmit() {}
  function handleChangeCheckBox({ target }) {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => color !== target.value)
      );
    }
  }

  function handleChecked(color) {
    return selectedColors.includes(color);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="minPrice">Preço minímo: </label>
      <input
        type="number"
        name="minPrice"
        id="minPrice"
        placeholder="Preço minímo"
        value={minPrice}
        onChange={({ target }) => {
          setMinPrice(target.value);
        }}
      />
      <label htmlFor="maxPrice">Preço maxímo: </label>
      <input
        type="number"
        name="maxPrice"
        id="maxPrice"
        placeholder="Preço maxímo"
        value={maxPrice}
        onChange={({ target }) => {
          setMaxPrice(target.value);
        }}
      />
      <span className="title">Cores: </span>
      <p id="p" name="p">
        <label>
          <span>Azul</span>
          <input
            type="checkbox"
            value="azul"
            checked={handleChecked("azul")}
            onChange={handleChangeCheckBox}
          />
        </label>
        <label>
          <span>Rosa</span>
          <input
            type="checkbox"
            value="rosa"
            checked={handleChecked("rosa")}
            onChange={handleChangeCheckBox}
          />
        </label>
        <label>
          <span>Preta</span>
          <input
            type="checkbox"
            value="preta"
            checked={handleChecked("preta")}
            onChange={handleChangeCheckBox}
          />
        </label>
        {selectedColors}
      </p>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Filters;
