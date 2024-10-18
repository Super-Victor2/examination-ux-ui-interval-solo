import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/headerComp/headerComp'
import HomePage from './pages/homePage/homePage'
import SetTimePage from './pages/setTimePage/setTimePage'
import TimerPage from './pages/timerPage/timerPage'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/SetTimePage' element={<SetTimePage />} />
          <Route path='/TimerPage' element={<TimerPage />} />
      </Routes>
    </div>
  )
}

export default App