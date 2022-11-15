// pages/index.tsx

import type { ReactElement } from 'react'
import Layout from '../layouts/Layout'
import type { NextPageWithLayout } from './_app'

const MapPage: NextPageWithLayout = () => {
  return <p>Map Page</p>
}

MapPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default MapPage