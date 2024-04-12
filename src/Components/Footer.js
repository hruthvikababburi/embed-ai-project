import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-700 p-4 mt-8">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Copyright notice */}
                    <div className="mb-4 lg:mb-0">
                        <p>© {new Date().getFullYear()} Character AI. All rights reserved.</p>
                    </div>

                    {/* Footer links */}
                    <div className="flex space-x-4">
                        <Link to="/about" className="hover:text-blue-500">About</Link>
                        <Link to="/privacy" className="hover:text-blue-500">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-blue-500">Terms of Service</Link>
                    </div>

                    {/* Social media links */}
                    <div className="flex space-x-4 mt-4 lg:mt-0">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                            Facebook
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                            Twitter
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
