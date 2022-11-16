// pages/index.tsx

import type { ReactElement } from 'react'
import AppCV from '../components/AppCV'
import AppHero from '../components/AppHero'
import Layout from '../layouts/Layout'
import type { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      {/* <AppHero/> */}
      <AppCV></AppCV>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default HomePage