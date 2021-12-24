import './App.less'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from 'src/pages/NotFoundPage'
import HomePage from './pages/Home'
import IntroPage from './pages/IntroPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
