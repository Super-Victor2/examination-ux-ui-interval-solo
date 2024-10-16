import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/headerComp/headerComp'
import HomePage from './pages/homePage/homePage'
import SetTimePage from './pages/setTimePage/setTimePage'
import AnalogTimerPage from './pages/analogTimerPage/analogTimerPage'
import DigitalTimerPage from './pages/digitalTimerPage/digitalTimerPage'
import TimeStopPage from './pages/timeStopPage/timeStopPage'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/SetTimePage' element={<SetTimePage />} />
          <Route path='/AnalogTimerPage' element={<AnalogTimerPage />} />
          <Route path='/DigitalTimerPage' element={<DigitalTimerPage />} />
          <Route path='/TimeStopPage' element={<TimeStopPage />} />
      </Routes>
    </div>
  )
}

export default App