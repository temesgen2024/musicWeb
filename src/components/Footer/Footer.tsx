import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { User } from 'lucide-react'
import { FcGoogle } from "react-icons/fc";
import { Mail, Phone } from 'lucide-react' // Add these icons

type Props = {}
const data = [
  
  {
    title: 'Melodies',
    subtitles: [
      'Top Charts',
      'New Releases',
      'Genres',
      'Playlists',
      'Artists'
    ]
  },
  {
    title: 'Access',
    subtitles: [
      'Login',
      'Sign Up',
      'Subscription Plans',
      'Download App'
    ]
  },
  {
    title: 'Contact',
    subtitles: [
      'Support',
      'Feedback',
      'Report a Problem'
    ]
  },


]
const Footer = (props: Props) => {
  return (
    <div className=''>
      <div className='flex justify-between items-center gap-16'>
        <div className='flex flex-col gap-4 w-[40%] text-white'>
          <h2 className='text-center text-3xl font-bold mb-6 flex'>Join Our platform</h2>
          <h5>
            You can be one of the <span className='text-fuchsia-600'>members</span> of our platform by just adding some necessarily information. if you already have an account on our website, you can just hit the Login button.
          </h5>
        </div>
        <div className='flex flex-col gap-4 bg-fuchsia-900 py-10 px-4 rounded-lg text-white w-[40%]'>
          <div className='flex justify-center gap-5 items-center'>
            <h2 className='text-2xl font-bold text-fuchsia-600 border-b-4 border-b-fuchsia-600 pb-2'>
              Signup
            </h2>
            <h2 className='text-xl'>
              Login
            </h2>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor='name'>Name</label>
              <div className='relative'>
                <Input
                  id='name'
                  className='bg-gray-800 text-white pl-10 py-5'
                  placeholder='Enter your full name'
                />
                <User className='absolute left-2 top-1/2 -translate-y-1/2 text-white' size={20} />
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor='number'>Phone Number</label>
              <div className='relative'>
                <Input
                  id='number'
                  type='tel'
                  className='bg-gray-800 text-white pl-10'
                  placeholder='e.g. +1234567890'
                />
                <Phone className='absolute left-2 top-1/2 -translate-y-1/2 text-white' size={20} />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-sm font-semibold' htmlFor='email'>Email</label>
            <div className='relative'>
              <Input
                id='email'
                type='email'
                className='bg-gray-800 text-white pl-10'
                placeholder='you@example.com'
              />
              <Mail className='absolute left-2 top-1/2 -translate-y-1/2 text-white' size={20} />
            </div>
          </div>
          <Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-none'>Sign Up</Button>
          <div className='flex flex-col items-center justify-center gap-2 mt-2'>
            <span className='text-sm'>or</span>
            <Button variant="outline" className='text-white border-white hover:bg-white hover:text-black rounded-none flex items-center justify-center gap-2'>
              <FcGoogle className='size-6' />
              Sign Up with Google
            </Button>
          </div>
        </div>
      </div>
      <div>
        {/* about */}
        <div></div>
        {/* melodies */}
        <div></div>
        {/* access */}
        <div></div>
        {/* contact */}
        <div></div>
        {/* social */}
        <div></div>
      </div>
    </div>
  )
}

export default Footer