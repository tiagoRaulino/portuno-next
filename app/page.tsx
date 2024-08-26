import List from "./components/List"
import Navbar from "./components/Navbar"

const app = () => {
  return (
    <div>
      <Navbar/>
      <div className="container col-md-4">
        <List/>
      </div>
    </div>
  )
}

export default app