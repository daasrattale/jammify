import { useMemo, useState } from "react";

export const useAuth = () => {

     const [token, setToken] = useState<string>('');

     useMemo(() => {
          const hash = window.location.hash;
          let token: string | null = window.localStorage.getItem("token");

          if (!token && hash) {
               token = hash.substring(1).split("&").find(param => param.startsWith("access_token"))!.split("=")[1]

               window.location.hash = ""
               window.localStorage.setItem("token", token)
          }
          
          setToken(token!)
     }, [])

     const logout = () =>  {
          setToken("")
          window.localStorage.removeItem("token");
     }

     return {
          token,
          isLoggedIn: !!token,
          logout
     };
}