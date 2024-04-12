import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/Homepage';
import ChatPage from './Components/ChatPage';
import CreateCharacterPage from './Components/CreateCharacterPage';

const App = () => {
    return (
        <Router>
            <div className="flex">
                {/* Include Navbar at the top level */}
                <Navbar />

                {/* Main content area */}
                <div className="flex-grow">
                    <Routes>
                        <Route exact path="/" element={<HomePage/>} />
                        <Route path="/chat/:id" element={<ChatPage/>} />
                        <Route path="/createcharacter" element={<CreateCharacterPage/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
