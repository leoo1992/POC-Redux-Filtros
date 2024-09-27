import React from "react";
import Input from "../UX/Input";
import CheckBox from "../UX/CheckBox";
import selectUniqueColors from "../../redux/helper/selectUniqueColors";
import { useSelector, useDispatch } from "react-redux";
import { changeFilters } from "../../redux/stores/productsStore";

const Filters = () => {
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [selectedColors, setSelectedColors] = React.useState([]);
  const colors = useSelector(selectUniqueColors);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
  }

  React.useEffect(() => {
    dispatch(changeFilters({ name: "colors", value: selectedColors }));
  }, [selectedColors, dispatch]);

  React.useEffect(() => {
    dispatch(
      changeFilters({
        name: "prices",
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
      })
    );
  }, [maxPrice, minPrice, dispatch]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        id="minPrice"
        text="Preço minímo"
        value={minPrice}
        type="number"
        setValue={setMinPrice}
      />
      <Input
        id="maxPrice"
        text="Preço maxímo"
        value={maxPrice}
        type="number"
        setValue={setMaxPrice}
      />
      <span className="title">Cores: </span>
      <p id="p" name="p">
        {colors.map((color) => (
          <CheckBox
            key={color}
            text={color}
            value={color}
            variable={selectedColors}
            setVariable={setSelectedColors}
          />
        ))}
      </p>
      <button type="submit">Filtrar</button>
    </form>
  );
};

export default Filters;
