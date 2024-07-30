import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import IndividualModule from "./Components/IndividualModule";
import SecurityPanel from "./Components/SecurityPanel";
import Modules from "./Components/Modules";
// import { createContext, useState } from "react";

// export type MessageProps = {
//   description: string
// }

// export type myContextProps = {
//   messagesDB: MessageProps[];
//   setMessagesDB: React.Dispatch<React.SetStateAction<MessageProps[]>>;
// };

// export const ContentContext = createContext<myContextProps>({
//   messagesDB: [],
//   setMessagesDB: () => {},
// });

function App() {
// const [messagesDB, setMessagesDB] = useState<MessageProps[]>([])

// const contextValues = {
//   messagesDB,
//   setMessagesDB,
// };

return (
    <>
        {/* <ContentContext.Provider> */}
        <Router>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/modules/:tag" element={<IndividualModule />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/panel" element={<SecurityPanel />} />
          </Routes>
        </Router>
        {/* </ContentContext.Provider> */}
    </>
  )
}

export default App
