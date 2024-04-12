import React, { useState } from 'react';
import Navbar from './Navbar';

const CreateCharacterPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [responses, setResponses] = useState('');

    const handleCreateCharacter = (e) => {
        e.preventDefault();
        const newCharacter = {
            id: Date.now().toString(),
            name,
            description,
            image,
            responses: responses.split(',').map((response) => response.trim()),
        };

        // Add new character to the characters list
        const charactersList = JSON.parse(localStorage.getItem('characters')) || [];
        charactersList.push(newCharacter);
        localStorage.setItem('characters', JSON.stringify(charactersList));

        // Redirect to the chat page for the new character
        window.location.href = `/chat/${newCharacter.id}`;
    };

    return (
        <div className="flex">
            <Navbar characters={JSON.parse(localStorage.getItem('characters')) || []} />
            <div className="flex-grow p-4">
                <h2 className="text-3xl font-bold mb-4">Create a New Character</h2>
                <form onSubmit={handleCreateCharacter} className="space-y-4">
                    <div className="form-group">
                        <label className="block mb-2" htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block mb-2" htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            className="w-full p-2 border rounded"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label className="block mb-2" htmlFor="image">Image URL:</label>
                        <input
                            type="text"
                            id="image"
                            className="w-full p-2 border rounded"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="block mb-2" htmlFor="responses">Responses (comma-separated):</label>
                        <input
                            type="text"
                            id="responses"
                            className="w-full p-2 border rounded"
                            value={responses}
                            onChange={(e) => setResponses(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateCharacterPage;
