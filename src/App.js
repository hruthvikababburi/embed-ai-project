import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Components/Homepage';
import CreateCharacterPage from './Components/CreateCharacterPage';
import ChatPage from './Components/ChatPage';
import Navbar from './Components/Navbar';

function App() {
    return (
        <Router>
            <div className="flex">
                {/* Navbar remains consistent across all pages */}
                <Navbar />

                {/* Main content area */}
                <div className="flex-grow p-4 lg:ml-1/5">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/createcharacter" element={<CreateCharacterPage />} />
                        <Route path="/chat/:id" element={<ChatPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
