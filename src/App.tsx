import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import IndividualModule from "./Components/IndividualModule";
import SecurityPanel from "./Components/SecurityPanel";
import Modules from "./Components/Modules";

function App() {

return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/modules/:tag" element={<IndividualModule />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/panel" element={<SecurityPanel />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
