// pages/index.tsx

import type { ReactElement } from 'react'
import DLayout from '../../layouts/DLayout'
import type { NextPageWithLayout } from '../_app'

const DashboardPage: NextPageWithLayout = () => {
  return <p>Dashboard Page</p>
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DLayout>
      {page}
    </DLayout>
  )
}

export default DashboardPage