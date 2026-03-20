import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side */}
                    <div className="flex items-center space-x-6">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-[#0047fb] font-bold text-2xl tracking-tighter">Airtasker</span>
                        </Link>

                        <nav className="hidden md:flex space-x-6 items-center">
                            <Link to="/post-task" className="bg-[#0047fb] text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition">
                                Post a task
                            </Link>
                            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Categories</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Browse tasks</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">How it works</a>
                        </nav>
                    </div>

                    {/* Right side */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/signup" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Sign up</Link>
                        <Link to="/login" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Log in</Link>
                        <Link to="/earn-money" className="text-[#0047fb] border border-gray-300 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-blue-50 hover:border-[#0047fb] transition">
                            Become a Tasker
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
