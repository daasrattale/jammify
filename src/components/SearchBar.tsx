import { Dispatch, SetStateAction, useRef } from "react";
import { TrackDetails } from "../types/track.type";
import { useSpotify } from "../hooks/useSpotify";

interface SearchBarProps {
     setTracks: Dispatch<SetStateAction<TrackDetails[]>>;
}


export const SearchBar = ({ setTracks }: SearchBarProps) => {

     const searchInputRef = useRef<HTMLInputElement>(null);
     const { searchTracks } = useSpotify();

     const search = async () => {
          setTracks(await searchTracks(searchInputRef.current!.value))
     }

     return (
          <div className="mx-5 mt-10 flex items-center">
               <input ref={searchInputRef} type="text" className={`bg-black/30 h-full pl-4 pr-10 py-2 w-full rounded-lg`} placeholder="Search songs..." />
               <button className="rounded-lg bg-purple-500 hover:bg-purple-700 h-full my-2  py-1 px-4 ml-3" onClick={search}>Search</button>
          </div>
     );
}