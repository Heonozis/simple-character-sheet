import Character from './components/Character'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import New from './components/New';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="character">
            <Route path="" element={<New />} />
            <Route path=":id" element={<Character />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
