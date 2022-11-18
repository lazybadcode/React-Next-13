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
import { useGetProvince } from "../services/province.swr.service";

const ProvincePage = () => {
  const { province, isLoading, isError } = useGetProvince();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Your browser is outdated!</AlertTitle>
      <AlertDescription>
        Error when fetching data
      </AlertDescription>
    </Alert>;
  }

  return (
    <Container my={4} maxW={"1200px"}>
      <Heading>จังหวัด</Heading>
      {province &&
        province.map((item, index) => {
          return <Text key={item.id}>{item.name}</Text>;
        })}
    </Container>
  );
};

ProvincePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProvincePage;
