import { Route, Routes } from "react-router-dom"
import AllProducts from "./pages/AllProducts/AllProducts"

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AllProducts />} />
      </Routes>
    </main>
  )
}

export default App
