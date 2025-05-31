import React from 'react'
import image1 from "@/assets/cover/cover5.jpg"
import { Dot, PlayCircle } from 'lucide-react'
type Props = {}

const AlbumHero = (props: Props) => {
    return (
        <div className='text-white flex justify-between items-center gap-4 p-10 bg-[#4a92ebab] rounded-2xl'>
            {/*imagetext box  */}
            <div className='flex  gap-8'>
                <div>
                    <img src={image1} alt="Album Cover" className='h-[228px] w-[228px] rounded-2xl' />
                </div>
                <div className='flex flex-col justify-between gap-2'>
                    <h1 className='text-4xl font-bold'>  Trending songs <span className='text-[#EE10B0] '>mix</span></h1>
                    <p>tate mcree, nightmares, the neighberhood, doja cat and ...</p>
                    <div className='flex items-center gap-4 '>
                        <p>20 songs</p>
                        <span className='text-[#EE10B0] '><Dot /></span>
                        <p>1h36m</p>
                    </div>
                </div>
            </div>
            <div className='self-end flex items-center gap-3 text-[#EE10B0] text-2xl'>
                <p>play all</p>
                <PlayCircle size={40} />
            </div>
        </div>
    )
}

export default AlbumHero