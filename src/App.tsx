import Header from './components/Header';
import Playing from './components/Playing';
import SongList from './components/SongList';
import { gettingSongList } from './services/song';
import { IMusic } from './types/music';

function App() {

  const getSongList = gettingSongList()

  return (
    <div className='music-body'>
    <div className='left-panel'>
    <Header text="All choice songs" />
    <SongList />

    </div>

    <div className='middle-panel'>
       <Playing />
    </div>

    <div className='right-panel'>

    </div>
        <p>Recently played</p>
    </div>
  );
}

export default App;
