import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import IndividualModule from "./Components/IndividualModule";
import Login from "./Components/Login";
import Panel from "./Components/Panel";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/modules/:id" element={<IndividualModule />} />
            <Route path="/panel/login" element={<Login />} />
            <Route path="/panel" element={<Panel />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
