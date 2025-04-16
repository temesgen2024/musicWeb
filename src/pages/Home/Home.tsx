import Layout from '@/hooks/Layout'
import React from 'react'
import img from '@/assets/banner/banner4.jpg'
type Props = {}

const Home = (props: Props) => {
  return (
    <Layout>
      {/* Top Navigation Bar */}
      <div
        className='h-[60vh]'
        style={{
          backgroundImage: `url("${img}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >


      </div>
    </Layout>
  )
}

export default Home
