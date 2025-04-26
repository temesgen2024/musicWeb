import { Plus } from 'lucide-react'
import React from 'react'

type Props = {
    href: string
}

const ViewAllBtn = ({href}: Props) => {
  return (
        <div>
            <a href={href} className='flex justify-center items-center gap-2 bg-gray-700 hover:bg-fuchsia-600 text-white px-4 py-4 rounded-full w-[70px] h-[70px] shadow-md'>
                <Plus className='text-white' size={20} />
            </a >
            <p className='text-center text-white'> ViewAll</p>
    </div>
  )
}

export default ViewAllBtn