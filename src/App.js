import Login from "./components/Login";
import WhatsApp from "./pages/WhatsApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
  return <>
  <BrowserRouter>
  
  <Routes>
    <Route path="/"  element={<Login />}/>
    <Route path="/chat"  element={<WhatsApp />}/>

  </Routes>
  </BrowserRouter>
  {/* <Login />; */}
  </> 
}

export default App;
