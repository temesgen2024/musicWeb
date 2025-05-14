import React from 'react'
type Props = {
    imgSrc?: string;
    generName?: string;
}

const Gener = ({imgSrc,generName}: Props) => {
  return (
    <div className='relative w-[250px]'>
        <img src={imgSrc} alt="" />
        <h1 className='absolute bottom-3 text-3xl text-white text-center w-full gener'>{generName}</h1>
    </div>
  )
}

export default Gener