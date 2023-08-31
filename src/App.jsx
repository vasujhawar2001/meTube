import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {AppBar} from './components';
import {ChannelPage, VideoPage, SearchFeed, Home} from './Pages';
import { AppContext } from './context/contextApi'
import Footer from './components/Footer';
import { reponame } from '../config';

function App() {

  return (
    <AppContext>
    
    <BrowserRouter basename={reponame}>  
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:id' element={<VideoPage />} />
        <Route path='/channel/:id' element={<ChannelPage />} />
        <Route path='/search/:searchQuery' element={<SearchFeed />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </AppContext>
  )
}

export default App
