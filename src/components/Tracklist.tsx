import { Track } from "../types/track.type"
import { SongListItem } from "./../components";


interface TracklistProps {
     tracks: Track[];
}


export const Tracklist = ({ tracks }: TracklistProps) => {


     return <>
          <div className="m-5 p-5 border rounded-xl border-gray-700 bg-black/70">
               <h1 className="text-xl mb-10">Results</h1>
               {
                    tracks.map(song =>
                         <SongListItem
                              key={song.id}
                              track={song}
                              actionButton={<button className="ml-auto px-2 text-blue-400">+</button>}
                         />
                    )
               }
          </div>
     </>
}