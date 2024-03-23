import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Jammer } from "./pages/Jammer"
import { Login } from "./pages/Login"



const App = () =>  (
  <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="jammer" element={<Jammer />}  />
      </Routes>
    </BrowserRouter>
)

export default App
