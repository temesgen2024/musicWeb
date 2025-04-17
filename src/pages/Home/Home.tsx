import React from 'react'
import img from '@/assets/banner/banner4.jpg'
import { Input } from '@/components/ui/input'
import Layout from '@/hooks/Layout'
import { Button } from '@/components/ui/button'
import { Music } from 'lucide-react'
import MusicCard from '@/components/CustomUi/MusicCard'
import ArtistCard from '@/components/CustomUi/ArtistCard'
import artist1 from '@/assets/artist/artist1.jpg'
import artist2 from '@/assets/artist/artist2.jpg'
import artist3 from '@/assets/artist/artist3.jpg'
import artist4 from '@/assets/artist/artist4.jpg'
import artist5 from '@/assets/artist/artist5.jpg'
type Props = {}
const artistData = [
  { image: artist1, name: 'Artist 1' },
  { image: artist2, name: 'Artist 2' },
  { image: artist3, name: 'Artist 3' },
  { image: artist4, name: 'Artist 4' },
  { image: artist5, name: 'Artist 5' }
]
const Home = (props: Props) => {
  return (
    <Layout>
      {/* Top Navigation Bar */}
      <div
        className='min-h-[60vh] w-full px-4 py-4 rounded-2xl relative gap-20 flex flex-col'
        style={{
          backgroundImage: `url("${img}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}

      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-30'></div>
        {/* Content */}

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
        <div className='w-1/2 z-10 text-white relative gap-5 flex flex-col'>
          <div>
            <h1 className='text-white text-5xl'>All the <span className='text-fuchsia-500'>Best song</span> in one place</h1>
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore cumque sit dolorum itaque id pariatur porro dignissimos ab molestias! Harum tempore asperiores, porro esse ipsam inventore culpa beatae ullam nam!</p>
          </div>
          <div className='flex gap-4'>
          <Button variant={"ghost"} className='px-10 border border-fuchsia-500 rounded-none text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white'>Discover now</Button>
          <Button className='px-10 rounded-none'>Play list</Button>
          </div>
        </div>

      </div>
      <MusicCard />
        <div className='gap-4 flex flex-col'>
<h1 className='text-white text-3xl font-semibold'>popular <span className='text-fuchsia-700'>Artist</span></h1>
        <div className='flex gap-3'>
        {artistData.map((artist, index) => (
          <ArtistCard key={index} image={artist.image} name={artist.name} />
        ))}
      </div>
        </div>
    </Layout>

  )
}

export default Home
