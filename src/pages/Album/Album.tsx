import { TrendingMusic } from '@/components/CustomUi/TerndingMusic'
import Layout from '@/hooks/Layout'
import React from 'react'

type Props = {}

const Album = (props: Props) => {
  return (
    <Layout>
        <TrendingMusic />
    </Layout>
  )
}

export default Album