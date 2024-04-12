import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/Homepage';
import ChatPage from './Components/ChatPage';
import CreateCharacterPage from './Components/CreateCharacterPage';
import Footer from './Components/Footer';

const App = () => {
    return (
        <Router>
            <div className='flex flex-col h-screen'>
                <div className="flex flex-grow">
                    
                    <Navbar />

                    
                    <div className="flex-grow">
                        <Routes>
                            <Route exact path="/" element={<HomePage/>} />
                            <Route path="/chat/:id" element={<ChatPage/>} />
                            <Route path="/createcharacter" element={<CreateCharacterPage/>} />
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
