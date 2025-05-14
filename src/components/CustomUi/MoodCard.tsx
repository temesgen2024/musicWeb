import React from 'react'

type Props = {
  moodName: string;
  imgSrc: string;
  songName: string;

};

const MoodCard = ({ imgSrc, songName, moodName }: Props) => {
  return (
    <div>
      <div className=' h-[290px] px-4 py-2 flex flex-col gap-3 bg-[#383838] rounded-lg relative overflow-hidden shadow-md'>
        <div className='relative '>
          <img src={imgSrc} alt={`${songName} cover`} className='w-full rounded-lg' />
          <h1 className='absolute bottom-3 text-3xl text-white text-center w-full gener'>{moodName}</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-white text-lg font-semibold '>{songName}</h1>

        </div>
      </div>
    </div>
    
  )
}

export default MoodCard