import { Dispatch, SetStateAction, useRef, useState } from "react";
import { PlaylistDetails } from "../types/playlist.type";
import { TrackDetails } from "../types/track.type";
import { Track } from "./../components";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

interface PlaylistProps {
     playlist: PlaylistDetails
     setPlaylist: Dispatch<SetStateAction<PlaylistDetails>>;
}


export const Playlist = ({ playlist, setPlaylist }: PlaylistProps) => {

     const playlistTitleRef = useRef<HTMLInputElement>(null);
     const [isModifying, setModifying] = useState<Boolean>(false);
     const { token } = useAuth();

     const removeFromPlaylist = (track: TrackDetails) => {
          // removing track from playlist.
          setPlaylist(prev => ({
               ...prev,
               tracks: prev.tracks.filter(t => t.id !== track.id)
          }));
     }

     const saveTitle = () => {
          setPlaylist(prev => ({
               ...prev,
               title: playlistTitleRef.current!.value
          }))
          setModifying(false);

     }

     const getUserId = async () => {
          const { data } = await axios.get("https://api.spotify.com/v1/me", {
               headers: {
                    Authorization: `Bearer ${token}`
               },
          })
          return data.id;
     }

     const createPlaylist = async (userId: string) => {
          const { data } = await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`,
               {
                    name: playlist.title,
                    description: 'Jammify playlist',
                    public: false
               },
               {
                    headers: {
                         Authorization: `Bearer ${token}`
                    },
               }
          );
          return data.id;
     }


     const addSongsToPlaylist = async (playlistId: string) => {

          let body = {
               uris: playlist.tracks.map(track => track.uri)
          }
          await axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
               body,
               {
                    headers: {
                         Authorization: `Bearer ${token}`
                    },
               })
     }

     const savePlaylist = async () => {
          const userId: string = await getUserId();
          const playlistId = await createPlaylist(userId);
          addSongsToPlaylist(playlistId);
     }

     return (
          <div className="m-5 p-5 border rounded-xl border-gray-700 bg-black/70">
               <div className="mb-7">
                    {
                         playlist.title == '' || isModifying
                              ? <input ref={playlistTitleRef} type="text" className={`bg-black/30 pl-4 pr-10 py-2 w-full my-2`} placeholder="Type playlist title..." />
                              : <span onClick={() => { setModifying(true) }} className="capitalize text-xl text-white-600 cursor-pointer">
                                   {playlist.title}
                              </span>
                    }
               </div>
               {
                    playlist.tracks.map(track =>
                         <Track
                              key={track.id}
                              track={track}
                              actionButton={<button onClick={() => removeFromPlaylist(track)} className="ml-auto px-2 text-red-300 text-2xl hover:bg-gray-800/70 rounded">-</button>}
                         />)
               }
               <div className="text-center py-4">
                    <button onClick={isModifying ? saveTitle : savePlaylist} disabled={playlist.tracks.length == 0 && !isModifying} className="bg-purple-500 hover:bg-purple-700 px-4 py-2 rounded-lg disabled:bg-gray-600 disabled:text-gray-500">{isModifying ? 'Save title' : 'Save to Spotify'}</button>
               </div>
          </div>
     );
}