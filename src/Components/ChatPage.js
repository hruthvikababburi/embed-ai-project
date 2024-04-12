import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const ChatPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [chatHistory, setChatHistory] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const charactersList = JSON.parse(localStorage.getItem('characters')) || [];
        const selectedCharacter = charactersList.find(char => char.id === id);
        setCharacter(selectedCharacter);
    }, [id]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        // Update chat history
        setChatHistory(prevHistory => [...prevHistory, { sender: 'You', message: input }]);

        // Simulate a response from the character
        if (character && character.responses.length > 0) {
            const randomResponse = character.responses[Math.floor(Math.random() * character.responses.length)];
            setChatHistory(prevHistory => [...prevHistory, { sender: character.name, message: randomResponse }]);
        }

        setInput('');
    };

    if (!character) return <div>Loading character...</div>;

    return (
        <div className="flex">
            
            <div className="flex-grow p-4">
                <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
                <div className="border rounded p-4 mb-4 overflow-y-auto h-64">
                    {chatHistory.map((chat, index) => (
                        <p key={index} className={`mb-2 ${chat.sender === 'You' ? 'text-right' : 'text-left'}`}>
                            <strong>{chat.sender}:</strong> {chat.message}
                        </p>
                    ))}
                </div>
                <form onSubmit={handleSendMessage}>
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            className="flex-grow p-2 border rounded"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatPage;
