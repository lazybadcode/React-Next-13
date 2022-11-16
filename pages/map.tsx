// pages/index.tsx

import type { ReactElement } from 'react'
import Layout from '../layouts/Layout'
import type { NextPageWithLayout } from './_app'
import { Container, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

type Province = {
  name: string
  postcode: string
}
export const getStaticProps: GetStaticProps<{ provinces: Province[] }> = async (
  context
) => {
  const provinces: Province[] = [
    { name: "Bangkok", postcode: "12000"},
    { name: "Ubon", postcode: "13000"},
  ]

  return {
    props: {
      provinces,
    },
    // revalidate: 10 // ISR
  }
}

const MapPage : NextPageWithLayout = ({provinces }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Container my={4} maxW={"1200px"}>
        <Heading mb={2}>
          My Map
        </Heading>
        {
            provinces.map((item, index) => {
                return <Text key={item.name}>{index + 1} - {item.name} {item.postcode}</Text>
            })
          }

      </Container>
    </>
  )
}

MapPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default MapPage