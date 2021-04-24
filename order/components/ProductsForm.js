import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Input } from "@chakra-ui/react";
import ProductSelector from "./ProductSelector";

const products = [
  {
    id: "F1",
    name: "Arándanos Congelados",
    format: "1kg",
    price: 5000,
  },
  {
    id: "F5",
    name: "Mix Berries Congelados",
    format: "1kg",
    price: 5000,
  },
];

const getProduct = (id) => {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id === id) return products[index];
  }
};

const ProductsForm = () => {
  const { handleSubmit } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    validationResolver: undefined,
    validationContext: undefined,
    validateCriteriaMode: "firstErrorDetected",
    submitFocusError: true,
    nativeValidation: false,
  });
  const onSubmit = (data) => console.log(data);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(0);
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <Container>
      <h1>Productos</h1>
      <h2>Seleccione los productos que desea comprar.</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProductSelector
          products={products}
          handleSelect={({ target }) => {
            setSelectedProduct(getProduct(target.value));
          }}
          handleQuantity={({ target }) => {
            setSelectedProductQuantity(target.value);
          }}
        />
        <Button
          onClick={() => {
            const prod = {
              id: selectedProduct.id,
              name: selectedProduct.name,
              quantity: selectedProductQuantity,
            };

            if (!prod.id) return;

            if (order.length === 0) {
              order.push(prod);
            } else {
              let idNotInOrder = true;
              order.forEach((p) => {
                if (p.id === prod.id) {
                  p.quantity = prod.quantity;
                  idNotInOrder = idNotInOrder && false;
                }
              });
              if (idNotInOrder) order.push(prod);
            }

            setOrder(order);
            let total = 0;
            order.forEach((p) => {
              total += p.quantity * getProduct(p.id).price;
            });
            setTotalPrice(total);
          }}
        >
          Seleccionar
        </Button>
        <p>Resumen</p>
        {order.map((p) => (
          <p key={p.id}>
            Producto:
            {p.name} Cantidad:
            {p.quantity}
          </p>
        ))}
        {`Total: ${totalPrice}`}
        <Input type="submit" />
      </form>
    </Container>
  );
};
export default ProductsForm;
