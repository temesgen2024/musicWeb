import React from 'react'

type Props = {
  image: string
  name: string
}

const ArtistCard = ({ image, name }: Props) => {
  return (
    <div className='w-[150px] h-[200px] flex flex-col justify-between items-center'>
        <img src={image} alt={name} className='w-[150px] h-[150px] rounded-full' />
        <p> 
            <span className='text-white text-lg font-semibold'>{name}</span>
        </p>
        
    </div>
  )
}

export default ArtistCard