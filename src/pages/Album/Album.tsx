import AlbumHero from '@/components/CustomUi/AlbumHero'
import CustomHeader from '@/components/CustomUi/CustomHeader'
import { TrendingMusic } from '@/components/CustomUi/TerndingMusic'
import Layout from '@/hooks/Layout'
import React from 'react'

type Props = {}

const Album = (props: Props) => {
  return (
    <Layout>
      <CustomHeader/>
      <AlbumHero />

      
        <TrendingMusic />
    </Layout>
  )
}

export default Album