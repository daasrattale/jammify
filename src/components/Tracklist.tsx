import { Song } from "../types/song.type"




export const Tracklist = ({songs}:{songs:Song[]}) => {


     return <div className="p-5">

          {
               songs.map(song=>(
                    <div key={song.id} className="mb-5">
                         <p>Name: {song.name}</p>
                         <p>Artist: {song.artist}</p>
                         <p>Album: {song.album}</p>
                    </div>
               ))
          }

          
     </div>
}