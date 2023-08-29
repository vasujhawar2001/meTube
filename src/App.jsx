import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/App.css'
import {AppBar, Home, VideoPage, ChannelPage, SearchFeed} from './components'

function App() {

  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:id' element={<VideoPage />} />
        <Route path='/channel/:id' element={<ChannelPage />} />
        <Route path='/search/:id' element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
