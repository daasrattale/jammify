import { Dispatch, SetStateAction } from "react";
import { TrackDetails } from "../types/track.type"
import { Track } from ".";
import { PlaylistDetails } from "../types/playlist.type";


interface SearchResultsProps {
     tracks: TrackDetails[];
     setPlaylist: Dispatch<SetStateAction<PlaylistDetails>>
}


export const SearchResults = ({ setPlaylist, tracks }: SearchResultsProps) => {


     const addToPlaylist = (track: TrackDetails) => {
          // adding track to playlist
          setPlaylist(prev => {
               // checking if the tack is already on the playlist.
               if (prev.tracks.find(t => t.id === track.id)) return prev;
               return {
                    ...prev,
                    tracks: [...prev.tracks, track]
               }
          });
     }

     return <>
          <div className="m-5 p-5 border rounded-xl border-gray-700 bg-black/70">
               <h1 className="text-xl mb-7">Results</h1>
               {
                    tracks.map(track =>
                         <Track
                              key={track.id}
                              track={track}
                              actionButton={<button onClick={() => addToPlaylist(track)} className="ml-auto px-2 text-green-300 text-2xl hover:bg-gray-800/70 rounded">+</button>}
                         />
                    )
               }
          </div>
     </>
}




// todo: clean and refactor code to multiple conponents.