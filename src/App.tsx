import { useState } from 'react';
import './App.css'
import { Track } from './types/track.type';
import { Playlist, Tracklist } from './components';
import { PlaylistDetails } from './types/playlist.type';


  


// Todo: hardcoded to be removed.
const hardcodedSongs: Track[] = [
    {
         id: 'id',
         name: 'name',
         artist: 'artist',
         album: 'album'
    },
    {
         id: 'id2',
         name: 'name2',
         artist: 'artist2',
         album: 'album2'
    },
    {
         id: 'id3',
         name: 'name4',
         artist: 'artist5',
         album: 'album6'
    }
];

function App() {


const [tracks] = useState<Track[]>(hardcodedSongs);
const [playlist] = useState<PlaylistDetails>({
  title: 'Playlist Title',
  tracks: hardcodedSongs
})
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
      <Tracklist tracks={tracks}/>
      <Playlist playlist={playlist} />
      </div>
      <p className="text-center text-gray-400">Photo by <a className="underline underline-offset-4" href="https://unsplash.com/@marcelalaskoski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marcela Laskoski</a> on <a className="underline underline-offset-4" href="https://unsplash.com/photos/selective-focus-silhouette-photography-of-man-playing-red-lighted-dj-terminal-YrtFlrLo2DQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
    </>
  )
}

export default App
