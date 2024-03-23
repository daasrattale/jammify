import { useState } from "react";
import { TrackDetails } from "../types/track.type";
import { PlaylistDetails } from "../types/playlist.type";
import { SearchBar } from "../components/SearchBar";
import { Playlist, SearchResults } from "../components";

// Todo: hardcoded to be removed.
const hardcodedSongs: TrackDetails[] = [
     {
          id: 'id',
          name: 'name',
          artist: 'artist',
          album: 'album',
          uri: 'https://open.spotify.com/track/0y1QJc3SJVPKJ1OvFmFqe6?si=bbdd80f36d04433c'
     },
     {
          id: 'id2',
          name: 'name2',
          artist: 'artist2',
          album: 'album2',
          uri: 'https://open.spotify.com/track/0y1QJc3SJVPKJ1OvFmFqe6?si=bbdd80f36d04433c'
     },
     {
          id: 'id3',
          name: 'name3',
          artist: 'artist3',
          album: 'album3',
          uri: 'https://open.spotify.com/track/0y1QJc3SJVPKJ1OvFmFqe6?si=bbdd80f36d04433c'
     }
];

export const Jammer = () => {
     const [tracks] = useState<TrackDetails[]>(hardcodedSongs);
     const [playlist, setPlaylist] = useState<PlaylistDetails>({ title: '', tracks: [] });
     const [searchCriteria, setSearchCriteria] = useState<string>('');

     return (
          <>
               <SearchBar setSearchCriteria={setSearchCriteria} />
               <div className="grid grid-cols-1 lg:grid-cols-2">
                    <SearchResults tracks={tracks} setPlaylist={setPlaylist} />
                    <Playlist playlist={playlist} setPlaylist={setPlaylist} />
               </div>
               <p className="text-center text-gray-400">Photo by <a className="underline underline-offset-4" href="https://unsplash.com/@marcelalaskoski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marcela Laskoski</a> on <a className="underline underline-offset-4" href="https://unsplash.com/photos/selective-focus-silhouette-photography-of-man-playing-red-lighted-dj-terminal-YrtFlrLo2DQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
          </>
     )
}