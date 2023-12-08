import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Products } from './components/pages/Products'
import { Transactions } from './components/pages/Transactions'
import { Locations } from './components/pages/Locations'
import { Actions } from './components/pages/Actions'
import { Analytics } from './components/pages/Analytics'
import { createContext, useState } from 'react';

export const SidebarContext = createContext()

function App() {
  
  const [sidebar, setSidebar] = useState(0);

  return (
    <SidebarContext.Provider value={{sidebar, setSidebar}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="locations" element={<Locations />} />
          <Route path="actions" element={<Actions />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </SidebarContext.Provider>
  )
}

export default App
