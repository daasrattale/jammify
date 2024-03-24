import { Dispatch, SetStateAction, useRef } from "react";
import { TrackDetails } from "../types/track.type";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

interface SearchBarProps {
     setTracks: Dispatch<SetStateAction<TrackDetails[]>>;
}


export const SearchBar = ({ setTracks }: SearchBarProps) => {

     const searchInputRef = useRef<HTMLInputElement>(null);
     const { token } = useAuth();

     const search = async () => {
          let searchCriteria = searchInputRef.current!.value;
          const { data } = await axios.get("https://api.spotify.com/v1/search", {
               headers: {
                    Authorization: `Bearer ${token}`
               },
               params: {
                    q: searchCriteria,
                    type: "track"
               }
          })
          setTracks(
               data.tracks.items.map((song: any) => ({
                    id: song.id,
                    name: song.name,
                    artist: song.artists.map((i: any) => i.name).join(','),
                    album: song.album.name,
                    uri: song.uri
               }))
          );     
     }

     return (
          <div className="mx-5 mt-10 flex items-center">
               <input ref={searchInputRef} type="text" className={`bg-black/30 h-full pl-4 pr-10 py-2 w-full rounded-lg`} placeholder="Search songs..." />
               <button className="rounded-lg bg-purple-500 hover:bg-purple-700 h-full my-2  py-1 px-4 ml-3" onClick={search}>Search</button>
          </div>
     );
}