import { Dispatch, SetStateAction, useRef } from "react";

interface SearchBarProps {
     setSearchCriteria: Dispatch<SetStateAction<string>>;
}


export const SearchBar = ({setSearchCriteria}: SearchBarProps) => {

     const searchInputRef = useRef<HTMLInputElement>(null);

     const search = () => {
          setSearchCriteria(searchInputRef.current!.value);
     }

     return (
          <div className="mx-5 mt-10 flex items-center">
              <input ref={searchInputRef} type="text" className={`bg-black/30 h-full pl-4 pr-10 py-2 w-full rounded-lg`} placeholder="Search songs..." /> 
              <button className="rounded-lg bg-purple-500 hover:bg-purple-700 h-full my-2  py-1 px-4 ml-3" onClick={search}>Search</button>
          </div>
     );
}