import { Routes, Route } from 'react-router-dom'
import SimulationList from './components/simulation-list/SimulationList'
import SimulationViewer from './components/replay/SimulationViewer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SimulationList />} />
      <Route path="/viewer/:simulationId" element={<SimulationViewer />} />
    </Routes>
  )
}

export default App
