import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import charactersData from '../data/charactersData';

export default function Navbar() {
  const navigate = useNavigate();

  const handleCreateCharacter = () => {
        navigate('/createcharacter');
    };
  const characters = JSON.parse(localStorage.getItem('characters')) || charactersData;

  return (
    <nav className="fixed h-screen lg:w-1/5 w-full bg-gray-100 lg:flex lg:flex-col lg:justify-between p-4 overflow-y-auto">
        <div className="lg:sticky lg:top-0">
            <h2 className="text-2xl font-bold mb-4">Character AI</h2>
            <div className="menu">
                <Link to="/" className="block mb-2">Home</Link>
                <Link to='/createcharacter'>
                    <button className="bg-blue-500 text-white py-1 px-4 rounded block mb-4" onClick={handleCreateCharacter}>
                        Create +
                    </button>
                </Link>
                <h3 className="text-lg font-bold mb-2">Characters</h3>
                <ul className="list-none pl-0">
                    {characters.map((character) => (
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
