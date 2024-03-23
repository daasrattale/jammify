import { useEffect, useState } from "react";

export const useSpotifyAuth = () => {

     const CLIENT_ID = "4efbd344433949679004cf243d5ae948";
     const REDIRECT_URI = "http://localhost:5173/"
     const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
     const RESPONSE_TYPE = "token";

     const [token, setToken] = useState<string>('');


     useEffect(()=>{
          const hash = window.location.hash;
          let token:string | null = window.localStorage.getItem("token");

          if (!token && hash) {
               token = hash.substring(1).split("&").find(param => param.startsWith("access_token"))!.split("=")[1]
   
               window.location.hash = ""
               window.localStorage.setItem("token", token)
           }
   
           setToken(token!)

     },[])

     return {
          token,
          isLoggedIn: !!token,
          CLIENT_ID, 
          REDIRECT_URI,
          AUTH_ENDPOINT, 
          RESPONSE_TYPE
     };
}