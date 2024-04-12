import React from 'react';

const Homepage = () => {
    return (
        <div className="flex pt-32 md:pt-5">
            <div className="flex-grow p-4">
                <h2 className="text-3xl font-bold mb-4">Welcome to Character AI</h2>
                <p className="mb-6">
                    Explore the world of AI characters, create your own, and chat with them!
                </p>

                {/* Add some sample static information */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Create Your Characters</h3>
                        <p>
                            Unleash your creativity by designing your own AI characters with unique personalities. Choose their traits, skills, and even their appearance.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Engage in Conversations</h3>
                        <p>
                            Chat with your characters and explore their responses. Experience dynamic conversations and see how they evolve over time.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Sample Characters</h3>
                        <p>
                            Get started quickly by choosing from a selection of pre-designed AI characters. Start chatting with them to see their personalities in action.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Community Creations</h3>
                        <p>
                            Discover characters created by other users. Engage with them and explore the diverse range of AI personalities crafted by the community.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">AI Character Tools</h3>
                        <p>
                            Utilize powerful tools to enhance your AI characters. Improve their responses, train them on specific topics, and much more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
