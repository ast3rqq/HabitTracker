import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
            <h1 className="text-xl font-bold">Habit Tracker</h1>
            <Link href="/settings">
                <a className="text-white hover:text-gray-200">
                    <img src="/icons/settings.svg" alt="Settings" className="w-6 h-6" />
                </a>
            </Link>
        </header>
    );
};

export default Header;