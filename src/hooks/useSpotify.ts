import axios from "axios"
import { useAuth } from "./useAuth"
import { TrackDetails } from "../types/track.type";

export const useSpotify = () => {

     const {token} = useAuth();

     const searchTracks = async (searchCriteria:string) => {
          const { data } = await axios.get("https://api.spotify.com/v1/search", {
               headers: {
                    Authorization: `Bearer ${token}`
               },
               params: {
                    q: searchCriteria,
                    type: "track"
               }
          })
          return data.tracks.items.map((song: any) => ({
               id: song.id,
               name: song.name,
               artist: song.artists.map((i: any) => i.name).join(','),
               album: song.album.name,
               uri: song.uri
          }))
     }
     

     const getUserId = async () => {
          const { data } = await axios.get("https://api.spotify.com/v1/me", {
               headers: {
                    Authorization: `Bearer ${token}`
               },
          })
          return data.id;
     }

     const createPlaylist = async (userId: string, name:string, description:string) => {
          const { data } = await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`,
               {
                    name,
                    description,
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

     const addSongsToPlaylist = async (playlistId: string, tracks:TrackDetails[]) => {

          let body = {
               uris: tracks.map(track => track.uri)
          }
          await axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
               body,
               {
                    headers: {
                         Authorization: `Bearer ${token}`
                    },
               })
     }




     return {
          addSongsToPlaylist,
          createPlaylist,
          getUserId,
          searchTracks
     }
}



