import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import CryptoDetails from "./pages/CryptoDetails"

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cryptoDetails/:id' element={<CryptoDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
