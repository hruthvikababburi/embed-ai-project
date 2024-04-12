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

    const handleDeleteCharacter = (id) => {
        // Filter out the character with the given ID
        const updatedCharacters = characters.filter(character => character.id !== id);
        // Update local storage with the new characters list
        localStorage.setItem('characters', JSON.stringify(updatedCharacters));
        // Refresh the component by reloading the page
        window.location.reload();
    };

    return (
        <nav className={`fixed lg:static lg:h-screen h-auto w-full lg:w-1/5 bg-gray-100 p-4 overflow-y-auto z-20`}>
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Character AI</h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                    {/* Hamburger icon */}
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Navbar content */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                <h2 className="text-2xl font-bold mb-4 lg:block hidden">Character AI</h2>
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
                               <div className='flex justify-between'>
                                    <Link to={`/chat/${character.id}`} className="text-blue-500">{character.name}</Link>
                                      <button
                                              className="text-red-500"
                                              onClick={() => handleDeleteCharacter(character.id)}
                                          >
                                              Delete
                                      </button>
                               </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
