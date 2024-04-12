import React from 'react';

const Homepage = ({ charactersData }) => {
    return (
        <div className="flex pt-32">
            <div className="flex-grow p-4">
                <h2 className="text-3xl font-bold mb-4">Welcome to Character AI</h2>
                <p>
                    Explore the world of AI characters, create your own, and chat with them!
                </p>
            </div>
        </div>
    );
};

export default Homepage;
