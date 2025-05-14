import Gener from '@/components/CustomUi/Gener'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Layout from '@/hooks/Layout'
import React from 'react'

type Props = {}

const Discover = (props: Props) => {
  return (
    <Layout>
        <div className='flex gap-5 justify-between items-center relative z-10 text-white '>
          <Input className='px-3 py-3 w-[40%] border-none bg-gray-700 focus:border-none' placeholder='Search music' />
          <ul className='flex justify-between items-center gap-5 text-xl font-semibold'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <Button variant={"ghost"} className='px-10 border border-fuchsia-500 rounded-none text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white'>Login</Button>
          <Button className='px-10 rounded-none'>Sign Up</Button>
        </div>
        <Gener />
    </Layout>
  )
}

export default Discover