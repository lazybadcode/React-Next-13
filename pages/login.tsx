import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";

import React from "react";
import { ReactElement } from "react";
import Layout from "../layouts/Layout";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type LoginFormInput = {
    email: string;
    password: string;
  };

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Please type email").email("Invalid Email"),
    password: yup
      .string()
      .required("Please input password")
      .min(3, "Min password 3 digits"),
  });

  const {
    register, handleSubmit,formState: { errors, isSubmitting },} = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
    mode: "all"
  });

  const onSubmit = (data: LoginFormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
        
          <Stack spacing={4}>

            <FormControl id="email" isInvalid={errors.email ? true : false}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={errors.password ? true : false}>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")}/> 
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>


            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                type="submit"
                isLoading={isSubmitting}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Log in
              </Button>

            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </form>
  );
};

// Do not show layout
//   LoginPage.getLayout = function getLayout(page: ReactElement) {
//     return <Layout>{page}</Layout>;
//   };

export default LoginPage;
