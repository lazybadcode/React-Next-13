// pages/index.tsx

import type { ReactElement } from 'react'
import DLayout from '../../layouts/DLayout'
import type { NextPageWithLayout } from '../_app'
import { Container, Heading, Text } from '@chakra-ui/react'

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <Container my={4} maxW={"1200px"}>
        <Heading mb={2}>
          My Dashboard
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veritatis porro in alias enim sint, nisi ab mollitia necessitatibus eos asperiores eaque tempore esse, nihil incidunt dicta temporibus libero aperiam!

        </Text>
      </Container>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DLayout>
      {page}
    </DLayout>
  )
}

export default DashboardPage