import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './Components/Homepage'
import CreateCharacterPage from './Components/CreateCharacterPage'
import ChatPage from './Components/ChatPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/createcharacter" element={<CreateCharacterPage/>} />
        <Route exact path="/chat:id" element={<ChatPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
