import React from "react";
import { useSelector } from "react-redux";
import filterProducts from "../../redux/helper/filterProducts";

const Products = () => {
  const data = useSelector(filterProducts);

  if (data.length !== 0)
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cor</th>
            <th>Preço</th>
          </tr>
        </thead>

        <tbody>
          {data.map(({ id, name, color, price }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{color}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default Products;
