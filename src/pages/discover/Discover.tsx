import Gener from '@/components/CustomUi/Gener'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Layout from '@/hooks/Layout'
import img from '@/assets/cover/cover1.jpg'
import img2 from '@/assets/cover/cover2.jpg'
import img3 from '@/assets/cover/cover3.jpg'
import img4 from '@/assets/cover/cover4.jpg'
import ViewAllBtn from '@/components/CustomUi/ViewAllBtn'
import artist1 from '@/assets/artist/artist1.jpg'
import artist2 from '@/assets/artist/artist2.jpg'
import artist3 from '@/assets/artist/artist3.jpg'
import artist4 from '@/assets/artist/artist4.jpg'
import artist5 from '@/assets/artist/artist5.jpg'
import VidoCard from '@/components/CustomUi/VidoCard'
import ArtistCard from '@/components/CustomUi/ArtistCard'
import MusicCard from '@/components/CustomUi/MusicCard'
import MoodCard from '@/components/CustomUi/MoodCard'
const generData = [
  { imgSrc: img, generName: 'Pop',playlisist: "pop playlist" },
  { imgSrc: img2, generName: 'Rock',playlisist: "Rock playlist" },
  { imgSrc: img3, generName: 'Jazz',playlisist: "pop playlist" },
  { imgSrc: img4, generName: 'Hip Hop',playlisist: "Hip Hop playlist" },
]
const artistData = [
  { image: artist1, name: 'Artist 1', viewCount: '1M' },
  { image: artist2, name: 'Artist 2', viewCount: '2M' },
  { image: artist3, name: 'Artist 3', viewCount: '3M' },
  { image: artist4, name: 'Artist 4', viewCount: '4M' },
  { image: artist5, name: 'Artist 5', viewCount: '5M' },
]

const Discover = () => {
  return (
    <Layout>
      <div className='flex gap-5 justify-between items-center relative z-10 text-white mb-16  '>
        <Input className='px-3 py-3 w-[40%] border-none bg-gray-700 focus:border-none' placeholder='Search music' />
        <ul className='flex justify-between items-center gap-5 text-xl font-semibold'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Button variant={"ghost"} className='px-10 border border-fuchsia-500 rounded-none text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white'>Login</Button>
        <Button className='px-10 rounded-none'>Sign Up</Button>
      </div>
      <div className='flex flex-col gap-5 mb-10 '>
        <h1 className='text-white text-3xl font-semibold'> Music <span className='text-fuchsia-700'>Gener</span></h1>
        <div className='flex justify-between items-center'>
          <div className='flex flex-wrap gap-5'>
            {generData.map((item, index) => (
              <Gener key={index} imgSrc={item.imgSrc} generName={item.generName} />
            ))}
          </div>
          <ViewAllBtn href='/' />
        </div>
      </div>
      <div>
        <h1 className='text-white text-3xl font-semibold mt-10 mb-5'>Mood <span
          className='text-fuchsia-700'>Playlist</span></h1>
        <div className='flex  justify-between items-center gap-4'>
          <div className='flex gap-3 '>
          {generData.map((item, index) => (
            <MoodCard key={index} imgSrc={item.imgSrc} songName={item.playlisist} moodName={item.generName} /> 
          ))}
          </div>
          <ViewAllBtn href="/videos" />

        </div>
      </div>
      <div className='gap-4 flex flex-col'>
        <h1 className='text-white text-3xl font-semibold'>popular <span className='text-fuchsia-700'>Artist</span></h1>
        <div className='flex justify-between items-center gap-4'>

          <div className='flex gap-3'>
            {artistData.map((artist, index) => (
              <ArtistCard key={index} image={artist.image} name={artist.name} />
            ))}
          </div>
          <ViewAllBtn href="/artist" />
        </div>
      </div>

      <div>
        <h1 className='text-white text-3xl font-semibold mt-10 mb-5'>Top <span
          className='text-fuchsia-700'>Videos</span></h1>
        <div className='flex  justify-between items-center gap-4'>
          <div className='flex gap-3 '>
            {artistData.slice(0, 3).map((artist, index) => (
              <VidoCard key={index} imgSrc={artist.image} songName={artist.name} artistName={artist.name} viewCount={artist.viewCount} />

            ))}

          </div>
          <ViewAllBtn href="/videos" />

        </div>
      </div>
      <div className='gap-4 flex flex-col mb-5 mt-10'>
        <h1 className='text-white text-3xl font-semibold'>New Realse <span className='text-fuchsia-700'>Songs</span></h1>
        <div className='flex justify-between items-center gap-4'>

          <div className='flex gap-3'>
            {artistData.map((artist, index) => (
              <MusicCard key={index} imgSrc={artist.image} songName={artist.name} artistName={artist.name} />
            ))}
          </div>
          <ViewAllBtn href="/songs" />
        </div>
      </div>
      <div className='gap-4 flex flex-col mb-5 mt-10'>
        <h1 className='text-white text-3xl font-semibold'>Top  <span className='text-fuchsia-700'>Album</span></h1>
        <div className='flex justify-between items-center gap-4'>

          <div className='flex gap-3'>
            {artistData.map((artist, index) => (
              <MusicCard key={index} imgSrc={artist.image} songName={artist.name} artistName={artist.name} />
            ))}
          </div>
          <ViewAllBtn href="/songs" />
        </div>
      </div>
    </Layout>
  )
}

export default Discover