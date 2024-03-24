import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {

     const CLIENT_ID = "4efbd344433949679004cf243d5ae948";
     const REDIRECT_URI = "http://localhost:5173/"
     const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
     const RESPONSE_TYPE = "token";
     const SCOPE = "playlist-modify-private,user-library-read";

     const { setToken, isLoggedIn } = useAuth();

     const logout = () =>  {
          setToken("")
          window.localStorage.removeItem("token");
     }

     return (
          <div className="flex flex-col min-h-screen justify-center items-center">
               <span className="text-3xl">Jammer for Spotify, let's get started!</span>


               {isLoggedIn
                    ?
                    <div className="flex gap-2">
                         <button className="bg-purple-500 hover:bg-purple-700 px-6 py-2 rounded-lg mt-4">
                         <Link to={"/jammer"} >Jammer Dashboard</Link>
                    </button>
                    <button 
                    className="bg-red-500 hover:bg-red-700 px-6 py-2 rounded-lg mt-4"
                    onClick={logout}>
                         Log out
                    </button>
                    </div>
                    :
                    <button className="bg-green-500 hover:bg-green-700 px-6 py-2 rounded-lg mt-4">
                         <a href={`${AUTH_ENDPOINT}?scope=${SCOPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                              Login to Spotify
                         </a>
                    </button>
               }


          </div>
     )
}