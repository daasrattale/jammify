import { useState } from "react";
import { TrackDetails } from "../types/track.type";
import { PlaylistDetails } from "../types/playlist.type";
import { SearchBar } from "../components/SearchBar";
import { Playlist, SearchResults } from "../components";


export const Jammer = () => {
     const [tracks, setTracks] = useState<TrackDetails[]>([]);
     const [playlist, setPlaylist] = useState<PlaylistDetails>({ title: 'Playlist name', tracks: [] });

     return (
          <>
               <SearchBar setTracks={setTracks} />
               <div className="grid grid-cols-1 lg:grid-cols-2">
                    <SearchResults tracks={tracks} setPlaylist={setPlaylist} />
                    <Playlist playlist={playlist} setPlaylist={setPlaylist} />
               </div>
               <p className="text-center text-gray-400">Photo by <a className="underline underline-offset-4" href="https://unsplash.com/@marcelalaskoski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marcela Laskoski</a> on <a className="underline underline-offset-4" href="https://unsplash.com/photos/selective-focus-silhouette-photography-of-man-playing-red-lighted-dj-terminal-YrtFlrLo2DQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
          </>
     )
}