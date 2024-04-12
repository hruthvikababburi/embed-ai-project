import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCharacterPage = () => {
    // State variables to hold form input values
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    // Handler function to create a new character
    const handleCreateCharacter = (e) => {
        e.preventDefault();

        // Create a new character object with the form input values
        const newCharacter = {
            id: Date.now().toString(),
            name,
            description,
            image,
            // No responses input anymore
        };

        // Retrieve the list of existing characters from local storage, or use an empty array if none exist
        const charactersList = JSON.parse(localStorage.getItem('characters')) || [];

        // Add the new character to the list
        charactersList.push(newCharacter);

        // Save the updated list back to local storage
        localStorage.setItem('characters', JSON.stringify(charactersList));

        // Redirect to the chat page for the new character
        navigate(`/chat/${newCharacter.id}`);
    };

    return (
        <div className="flex-grow p-4 pt-32">
            <h2 className="text-3xl font-bold mb-4">Create a New Character</h2>

            {/* Form for creating a new character */}
            <form onSubmit={handleCreateCharacter} className="space-y-4">
                {/* Input for character name */}
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

                {/* Input for character description */}
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

                {/* Input for character image URL */}
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

                {/* Submit button to create a new character */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateCharacterPage;
