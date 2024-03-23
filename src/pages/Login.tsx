import { Link } from "react-router-dom";
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";

export const Login = () => {

     const { isLoggedIn, CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE } = useSpotifyAuth();

     return (
          <div className="flex flex-col min-h-screen justify-center items-center">
               <span className="text-3xl">Jammer for Spotify, let's get started!</span>

               <button className="bg-purple-500 hover:bg-purple-700 px-6 py-2 rounded-lg mt-4">
                    {isLoggedIn
                         ? <Link to={"jammer"} >Jammer Dashboard</Link>
                         : <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                              Login to Spotify
                         </a>
                    }
               </button>

          </div>
     )
}