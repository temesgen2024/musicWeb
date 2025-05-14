"use client"
import artist1 from '@/assets/artist/artist1.jpg'
import artist2 from '@/assets/artist/artist2.jpg'
import artist3 from '@/assets/artist/artist3.jpg'
import artist4 from '@/assets/artist/artist4.jpg'
import artist5 from '@/assets/artist/artist5.jpg'
import { Heart } from 'lucide-react'

const musicData = [
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        releaseDate: "2019-11-29",
        album: "After Hours",
        duration: "3:20",
        image: artist1,   
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        releaseDate: "2020-10-01",
        album: "Future Nostalgia",
        duration: "3:23",
        image: artist2,
    },
    {
        title: "As It Was",
        artist: "Harry Styles",
        releaseDate: "2022-04-01",
        album: "Harry's House",
        duration: "2:47",
        image: artist3,
    },
    {
        title: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        releaseDate: "2021-07-09",
        album: "Stay (Single)",
        duration: "2:21",
        image: artist4,
    },
    {
        title: "Industry Baby",
        artist: "Lil Nas X, Jack Harlow",
        releaseDate: "2021-07-23",
        album: "Montero",
        duration: "3:32",
        image: artist5,
    },
]

export function TrendingMusic() {
    return (
        <div className="w-full px-4 py-6 rounded-2xl text-white">
            <h2 className="text-2xl font-semibold mb-4">Trending Music</h2>
            <div className="w-full flex flex-col gap-2">
                {/* Header Row */}
                <div className="hidden md:flex px-4 py-2  rounded text-sm font-semibold w-full">
                    <div className="w-[5%]"></div>
                    <div className="w-[45%] pl-2"></div>
                    <div className="w-[20%]">Release Date</div>
                    <div className="w-[20%]">Album</div>
                    <div className="w-[10%] text-right">Time</div>
                </div>

                {/* Track Rows */}
                {musicData.map((track, index) => (
                    <div
                        key={index}
                        className="flex items-center px-4 py-3 bg-[#2c2c2c] rounded-lg hover:bg-gray-700 transition w-full"
                    >
                        <div className="w-[5%] text-sm">{index + 1}</div>
                        <div className="w-[45%] flex items-center">
                            <img
                                src={track.image}
                                alt={track.title}
                                className="w-10 h-10 rounded-lg mr-3 object-cover"
                            />
                            <div className="truncate">
                                <p className="text-sm font-medium truncate">{track.title}</p>
                                <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                            </div>
                        </div>
                        <div className="w-[20%] text-sm">{track.releaseDate}</div>
                        <div className="w-[20%] text-sm">{track.album}</div>
                        <div className="w-[10%] text-sm text-right flex items-center justify-end gap-2"><Heart className='text-fuchsia-800'/>{track.duration}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
