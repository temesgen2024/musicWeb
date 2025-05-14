import React from 'react'
import img1 from '../../assets/cover/cover1.jpg'
type Props = {
    imgSrc?: string;
    generName?: string;
}

const Gener = (props: Props) => {
  return (
    <div className='relative w-[300px]'>
        <img src={img1} alt="" />
        <h1 className='absolute bottom-3 text-3xl text-white text-center w-full gener'>pop music</h1>
    </div>
  )
}

export default Gener