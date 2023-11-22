import Sidebar from "./components/Sidebar"
import Products from "./components/Products"
import "./App.css"

function App() {
  return (
    <div className="d-flex">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <Products />
      </div>
    </div>
  )
}

export default App
