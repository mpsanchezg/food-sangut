import React from "react";
import UserDataForm from "../../order/components/UserDataForm";
import ProductsForm from "../../order/components/ProductsForm";
import { ChakraProvider } from "@chakra-ui/react";

const Order = () => {
  return (
    <>
      <ChakraProvider>
        <UserDataForm />
        <ProductsForm />
      </ChakraProvider>
    </>
  );
};
export default Order;
