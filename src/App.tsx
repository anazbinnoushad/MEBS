import TheLayout from './containers/TheLayout'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<TheLayout />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
