import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Container,
    Heading,
    Spinner,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { ReactElement } from "react";
  import Layout from "../layouts/Layout";
  
  const LoginPage = () => {
   
  
    return (
      <Container my={4} maxW={"1200px"}>
       <Heading>Login</Heading>
      </Container>
    );
  };
  
  LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
  };
  
  export default LoginPage;
  