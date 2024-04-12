import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    // Retrieve characters list from local storage (use empty array as fallback)
    const storedCharacters = localStorage.getItem('characters');
    const characters = storedCharacters ? JSON.parse(storedCharacters) : [];

    const handleCreateCharacter = () => {
        navigate('/createcharacter');
    };

    return (
        <nav className={`fixed lg:static lg:h-screen h-auto w-full lg:w-1/5 bg-gray-100 p-4 overflow-y-auto z-20 ${isOpen ? '' : 'hidden'} lg:block`}>
            {/* Menu button for mobile view */}
            <div className="lg:hidden flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Character AI</h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                    {/* Menu button icon */}
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Navbar content */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                <h2 className="text-2xl font-bold mb-4 hidden lg:block">Character AI</h2>
                <div className="menu">
                    <Link to="/" className="block mb-2">Home</Link>
                    <button
                        className="bg-blue-500 text-white py-1 px-4 rounded block mb-4"
                        onClick={handleCreateCharacter}
                    >
                        Create +
                    </button>
                    <h3 className="text-lg font-bold mb-2">Characters</h3>
                    <ul className="list-none pl-0">
                        {characters.map(character => (
                            <li key={character.id} className="mb-2">
                                <Link to={`/chat/${character.id}`} className="text-blue-500">{character.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
