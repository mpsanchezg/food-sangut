import { Input, Select } from "@chakra-ui/react";
import React from "react";

const ProductSelector = ({ products, handleSelect, handleQuantity }) => {
  return (
    <>
      <label>Producto</label>
      <Select onChange={handleSelect}>
        <option value="">Seleccione un producto.</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </Select>
      <label>Cantidad</label>
      <Input
        type="number"
        min="0"
        placeholder="Ingrese la cantidad"
        onChange={handleQuantity}
      />
    </>
  );
};

export default ProductSelector;
