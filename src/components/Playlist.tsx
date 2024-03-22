import { PlaylistDetails } from "../types/playlist.type";
import { SongListItem } from "./../components";

interface PlaylistProps {
     playlist: PlaylistDetails
}


export const Playlist = ({ playlist }: PlaylistProps) => {
     return (
          <div className="m-5 p-5 border rounded-xl border-gray-700 bg-black/70">
               <h1 className="text-xl mb-10">{playlist.title}</h1>
               {
                    playlist.tracks.map(song => <SongListItem key={song.id} track={song} />)
               }
               <div className="text-center py-4">
               <button className="bg-blue-500 px-4 py-2 rounded-full">Save to Spotify</button>
               </div>
          </div>
     );
}