import './css/App.css'
import { Sidebar } from './components/Sidebar'
import { MainDash } from './components/dashboard/MainDash'

function App() {

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  )
}

export default App
