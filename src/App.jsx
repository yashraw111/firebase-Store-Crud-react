import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import CreateFirebase from "./fireStore/Crud/CreateFirebase"
import "bootstrap/dist/css/bootstrap.css"
import UpdateFire from "./fireStore/Crud/UpdateFire"
import SingleUser from "./fireStore/Crud/SingleUser"

function App() {
  return (
    <>
  <Router>
      <Routes>
        <Route path="/" element={<CreateFirebase></CreateFirebase>} ></Route>
        <Route path="/UpdateRedux/:id" element={<UpdateFire></UpdateFire>} ></Route>
        <Route path="/SingleUser/:id" element={<SingleUser></SingleUser>} ></Route>
      </Routes>
     </Router> 
    </>
  )
}

export default App