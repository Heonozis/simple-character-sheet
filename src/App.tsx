import Character from './components/Character'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import New from './components/New';
import { BrowserRouter, HashRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/character">
            <Route index element={<New />} />
            <Route path=":id" element={<Character />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
