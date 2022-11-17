// pages/index.tsx

import type { ReactElement } from "react";
import Layout from "../layouts/Layout";
import type { NextPageWithLayout } from "./_app";
import {
  Card,
  CardBody,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Stack,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getAPIVersion } from "../services/api.service";
import { Version } from "../types/version.type";
import { getProduct } from "../services/product.service";
import { Product } from "../types/product.type";
import React from "react";

type Data = {
  message: string;
  total: number;
};

export const getServerSideProps: GetServerSideProps<{
  data: Data;
  api: Version;
  products: Product[];
}> = async (context) => {
  const response = await getAPIVersion();
  const api: Version = response.data;

  // get product from backend api
  const responseProduct = await getProduct();
  const products: Product[] = responseProduct.data.data;

  //const res = await fetch('https://.../data')
  const data: Data = { message: "Hello SSR", total: 100 };

  return {
    props: {
      data,
      api,
      products,
    },
  };
};

const ProductPage: NextPageWithLayout = ({
  data,
  api,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Container my={4} maxW={"1200px"}>
        <Heading mb={2}>
          สินค้า {data.message} {data.total}
        </Heading>
        <Divider />

        <SimpleGrid columns={3} spacing={10}>
            {
              products.map((item, index) => {
                  return (
                    <React.Fragment key={item.id}>
                        <Card maxW='sm'>
                          <CardBody>
                            <Image
                              src={item.picture}
                              alt={item.detail}
                              borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                              <Heading size='md'>{item.title}</Heading>
                              <Text>
                                {item.detail}
                              </Text>
                              <Text color='blue.600' fontSize='2xl'>
                                {item.date}
                              </Text>
                            </Stack>
                          </CardBody>
                          <Divider />
                          <CardFooter>
                            <ButtonGroup spacing='2'>
                              <Button variant='solid' colorScheme='blue'>
                                Watch now
                              </Button>
                              <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                              </Button>
                            </ButtonGroup>
                          </CardFooter>
                        </Card>
                    </React.Fragment>
                  )
              })
            }
          </SimpleGrid>    


       
      </Container>
    </>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProductPage;
