import Layout from '@/hooks/Layout'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='mt-16 bg-fuchsia-900 py-10 px-4 rounded-lg text-white '>
  <h2 className='text-center text-3xl font-bold mb-6'>Join Our platform</h2>
  <div className='max-w-xl mx-auto flex flex-col gap-4'>
    <div>
      <h1>ghhhh</h1>
    </div>
    <div className='flex flex-col gap-1'>
      <label className='text-sm font-semibold' htmlFor='name'>Name</label>
      <Input id='name' className='bg-gray-800 text-white' placeholder='Enter your full name' />
    </div>

    <div className='flex flex-col gap-1'>
      <label className='text-sm font-semibold' htmlFor='number'>Phone Number</label>
      <Input id='number' type='tel' className='bg-gray-800 text-white' placeholder='e.g. +1234567890' />
    </div>

    <div className='flex flex-col gap-1'>
      <label className='text-sm font-semibold' htmlFor='email'>Email</label>
      <Input id='email' type='email' className='bg-gray-800 text-white' placeholder='you@example.com' />
    </div>

    <Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-none'>Sign Up</Button>

    <div className='flex items-center justify-center gap-2 mt-2'>
      <span className='text-sm'>or</span>
      <Button variant="outline" className='text-white border-white hover:bg-white hover:text-black rounded-none'>
        Sign Up with Google
      </Button>
    </div>

  </div>
</div>
  )
}

export default Footer