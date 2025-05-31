import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaArrowLeftLong } from "react-icons/fa6";
type Props = {}

const CustomHeader = (props: Props) => {
  return (
    <div className='flex justify-between items-center px-12 fixed w-[82%] top-0  right-0 z-10  py-8 text-[24px]'>
      <a className='text-white' href="/"> <FaArrowLeftLong className='text-white' /></a>
        <div className='flex justify-between gap-4'>
            <ul className='flex gap-4 text-white  font-medium items-center'>
                <li>  Share</li>
                <li>About</li>
                <li>premuim</li>
                <li><FaUserCircle/></li>
            </ul>
        </div> 
        
        
    </div>
  )
}

export default CustomHeader