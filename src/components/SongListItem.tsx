import { Track } from "../types/track.type"

interface SongListItemProps {
     track: Track;
     actionButton?:React.ReactNode
}

export const SongListItem = ({ track, actionButton }: SongListItemProps) => (
     <div className="mb-5 pb-2 border-b">
          <div className="flex">
               <div>
                    <p className="capitalize text-md font-semibold text-blue-300">{track.name}</p>
                    <p className="capitalize text-sm text-gray-400"> {track.artist} | {track.album}</p>
               </div>
               {actionButton}
          </div>
     </div>
)