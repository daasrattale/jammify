import { Dispatch, SetStateAction } from "react";
import { PlaylistDetails } from "../types/playlist.type";
import { TrackDetails } from "../types/track.type";
import { Track } from "./../components";

interface PlaylistProps {
     playlist: PlaylistDetails
     setPlaylist: Dispatch<SetStateAction<PlaylistDetails>>;
}


export const Playlist = ({ playlist, setPlaylist }: PlaylistProps) => {

     const removeFromPlaylist = (track: TrackDetails) => {
          // removing track from playlist.
          setPlaylist(prev => ({
            ...prev, 
            tracks: prev.tracks.filter(t=>t.id !== track.id)
          }));
        }

     return (
          <div className="m-5 p-5 border rounded-xl border-gray-700 bg-black/70">
               <input type="text" className="bg-black pl-4 pr-10 py-2 rounded-full my-2" placeholder="Type playlist title..." />
               {
                    playlist.tracks.map(track =>
                         <Track
                              key={track.id}
                              track={track}
                              actionButton={<button onClick={()=> removeFromPlaylist(track)} className="ml-auto px-2 text-red-400">-</button>}
                         />)
               }
               <div className="text-center py-4">
                    <button className="bg-blue-500 px-4 py-2 rounded-full">Save to Spotify</button>
               </div>
          </div>
     );
}