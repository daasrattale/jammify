import { BrowserRouter, Route, Routes, } from "react-router-dom"
import { Jammer } from "./app/pages/Jammer"
import { Login } from "./app/pages/Login"
import { ProtectedRoute } from "./app/routes/ProtectedRoute"



const App = () =>  (
  <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="jammer" element={<ProtectedRoute><Jammer /></ProtectedRoute>}  />
      </Routes>
    </BrowserRouter>
)

export default App
