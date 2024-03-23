import { Dispatch, SetStateAction, useRef } from "react";
import { PlaylistDetails } from "../types/playlist.type";
import { TrackDetails } from "../types/track.type";
import { Track } from "./../components";

interface PlaylistProps {
     playlist: PlaylistDetails
     setPlaylist: Dispatch<SetStateAction<PlaylistDetails>>;
}


export const Playlist = ({ playlist, setPlaylist }: PlaylistProps) => {

     const playlistTitleRef = useRef<HTMLInputElement>(null);

     const removeFromPlaylist = (track: TrackDetails) => {
          // removing track from playlist.
          setPlaylist(prev => ({
               ...prev,
               tracks: prev.tracks.filter(t => t.id !== track.id)
          }));
     }

     const savePlaylist = () => {
          setPlaylist(prev => ({
               ...prev,
               title: playlistTitleRef.current!.value
          }))
     }

     return (
          <div className="m-5 p-5 border rounded-xl border-gray-700 bg-black/70">
               <div>
                    {playlist.title || <input ref={playlistTitleRef} type="text" className={`bg-black pl-4 pr-10 py-2 rounded-full my-2`} placeholder="Type playlist title..." />}
               </div>
               {
                    playlist.tracks.map(track =>
                         <Track
                              key={track.id}
                              track={track}
                              actionButton={<button onClick={() => removeFromPlaylist(track)} className="ml-auto px-2 text-red-400">-</button>}
                         />)
               }
               <div className="text-center py-4">
                    <button onClick={savePlaylist} disabled={playlist.tracks.length == 0} className="bg-blue-500 px-4 py-2 rounded-full disabled:bg-gray-600 disabled:text-gray-500">Save to Spotify</button>
               </div>
          </div>
     );
}