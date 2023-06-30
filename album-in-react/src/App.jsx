import './App.css'
import { ListSongs } from './Components/ListSongs/listSong'

function App() {

  return (
    <>
      <div>
        <h1>Album in React</h1>
      </div>
      <div className='totalAlbums'>
        <ListSongs/>
      </div>
    </>
  )
}

export default App
