import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const UserDataForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    validationSchema: undefined, // Note: will be deprecated in the next major version with validationResolver
    validationResolver: undefined,
    validationContext: undefined,
    validateCriteriaMode: "firstErrorDetected",
    submitFocusError: true,
    nativeValidation: false,
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <h1>Formulario de Compra</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Nombre y Apellido</FormLabel>
        <Input
          id="name"
          {...register("name", { required: true, maxLength: 30 })}
        />
        <FormControl id="email">
          <FormLabel>Correo Electrónico</FormLabel>
          <Input type="email" {...register("email", { required: true })} />
          <FormHelperText>Nunca compartiremos tu correo.</FormHelperText>
        </FormControl>

        <FormLabel>Celular</FormLabel>
        <Input
          id="cellphone"
          {...register("cellphone", { required: true, maxLength: 30 })}
        />

        <FormLabel>Comuna</FormLabel>
        <Select {...register("commune", { required: true })}>
          <option value="las_condes">Las Condes</option>
          <option value="vitacura">Vitacura</option>
          <option value="lo_barnechea">Lo Barnechea</option>
        </Select>

        <FormLabel>Dirección</FormLabel>
        <Input id="address" {...register("address", { required: true })} />

        {errors.name && errors.name.type === "required" && (
          <span>Por favor, ingrese su nombre.</span>
        )}
        {errors.email && errors.email.type === "required" && (
          <span>Por favor, ingrese su correo.</span>
        )}
        <Input type="submit" />
      </form>
    </Container>
  );
};
export default UserDataForm;
