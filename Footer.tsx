import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center">
            <p>&copy; {new Date().getFullYear()} Habit Tracker. All rights reserved.</p>
            <div>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
                <a href="/terms-of-service" className="text-gray-400 hover:text-white"> Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;