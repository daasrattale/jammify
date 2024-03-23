import { TrackDetails } from "../types/track.type"

interface TrackProps {
     track: TrackDetails;
     actionButton?:React.ReactNode
}

export const Track = ({ track, actionButton }: TrackProps) => (
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