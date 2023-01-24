import TheLayout from './containers/TheLayout'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<TheLayout />} />
      </Routes>
    </div>
  )
}

export default App
