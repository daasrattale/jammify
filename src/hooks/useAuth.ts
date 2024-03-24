import { useEffect, useState } from "react";

export const useAuth = () => {

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
          setToken,
          isLoggedIn: !!token
     };
}