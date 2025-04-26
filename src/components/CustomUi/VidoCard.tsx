import React from 'react'

type Props = {
  imgSrc: string;
  songName: string;
  artistName: string;
  viewCount: string;
};

const VidoCard = ({ imgSrc, songName, artistName, viewCount }: Props) => {
  return (
        <div className=' h-[250px] px-4 py-2 flex flex-col bg-[#383838] rounded-lg relative overflow-hidden shadow-md'>
            <img src={imgSrc} alt={`${songName} cover`} className='w-full rounded-lg' />
            <div className='flex flex-col gap-2'>
                <h1 className='text-white text-lg font-semibold '>{songName}</h1>
                <div className='flex justify-between items-center'>
                <p className='text-gray-400 text-sm'>{artistName}</p>
                <p className='text-gray-400 text-sm'>{viewCount}</p>

                </div>
            </div>
        </div> 
  )
}

export default VidoCard