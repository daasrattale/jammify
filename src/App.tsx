import { useState } from 'react';
import './App.css'
import { TrackDetails } from './types/track.type';
import { Playlist, Tracklist } from './components';
import { PlaylistDetails } from './types/playlist.type';


// Todo: hardcoded to be removed.
const hardcodedSongs: TrackDetails[] = [
  {
    id: 'id',
    name: 'name',
    artist: 'artist',
    album: 'album',
    uri: 'https://open.spotify.com/track/0y1QJc3SJVPKJ1OvFmFqe6?si=bbdd80f36d04433c'
  },
  {
    id: 'id2',
    name: 'name2',
    artist: 'artist2',
    album: 'album2',
    uri: 'https://open.spotify.com/track/0y1QJc3SJVPKJ1OvFmFqe6?si=bbdd80f36d04433c'
  },
  {
    id: 'id3',
    name: 'name3',
    artist: 'artist3',
    album: 'album3',
    uri: 'https://open.spotify.com/track/0y1QJc3SJVPKJ1OvFmFqe6?si=bbdd80f36d04433c'
  }
];

function App() {

  const [tracks] = useState<TrackDetails[]>(hardcodedSongs);
  const [playlist, setPlaylist] = useState<PlaylistDetails>({ title: 'sss', tracks: [] });

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Tracklist tracks={tracks} setPlaylist={setPlaylist} />
        <Playlist playlist={playlist} setPlaylist={setPlaylist}/>
      </div>
      <p className="text-center text-gray-400">Photo by <a className="underline underline-offset-4" href="https://unsplash.com/@marcelalaskoski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marcela Laskoski</a> on <a className="underline underline-offset-4" href="https://unsplash.com/photos/selective-focus-silhouette-photography-of-man-playing-red-lighted-dj-terminal-YrtFlrLo2DQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
    </>
  )
}

export default App
