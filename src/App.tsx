import { useState } from 'react';
import './App.css'
import { Tracklist } from './components'
import { Song } from './types/song.type';


  


// Todo: hardcoded to be removed.
const hardcodedSong: Song[] = [
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


const [songs] = useState<Song[]>(hardcodedSong);

  return (
    <>
      <Tracklist songs={songs}/>
    </>
  )
}

export default App
