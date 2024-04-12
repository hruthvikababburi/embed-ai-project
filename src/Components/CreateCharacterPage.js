import React, { useState } from 'react';


const CreateCharacterPage = () => {
    // State variables to hold form input values
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [responses, setResponses] = useState('');

    // Handler function to create a new character
    const handleCreateCharacter = (e) => {
        e.preventDefault();

        // Create a new character object with the form input values
        const newCharacter = {
            id: Date.now().toString(),
            name,
            description,
            image,
            responses: responses.split(',').map((response) => response.trim()),
        };

        // Retrieve the list of existing characters from local storage, or use an empty array if none exist
        const charactersList = JSON.parse(localStorage.getItem('characters')) || [];

        // Add the new character to the list
        charactersList.push(newCharacter);

        // Save the updated list back to local storage
        localStorage.setItem('characters', JSON.stringify(charactersList));

        // Redirect to the chat page for the new character
        window.location.href = `/chat/${newCharacter.id}`;
    };

    return (
        <div className="flex">
            {/* Include the Navbar component */}
           

            {/* Main content area for the page */}
            <div className="flex-grow p-4">
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

                    {/* Input for character responses (comma-separated) */}
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

                    {/* Submit button to create the character */}
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
