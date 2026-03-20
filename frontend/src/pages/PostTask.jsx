import React from 'react';
import { Link } from 'react-router-dom';

const PostTask = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">

            {/* Custom Minimal Header */}
            <header className="border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white z-50">
                <Link to="/" className="text-[#0047fb] font-black text-3xl tracking-tighter">
                    Airtasker
                </Link>
                <Link to="/" className="text-gray-500 hover:text-gray-900 transition p-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
            </header>

            {/* Main Layout */}
            <div className="flex-grow flex flex-col md:flex-row max-w-6xl mx-auto w-full">

                {/* Left Sidebar */}
                <aside className="hidden md:block w-1/4 py-12 px-8 border-r border-gray-100">
                    <div className="text-[#071343] text-lg font-bold mb-8">Post a task</div>
                    <nav className="space-y-6">
                        <div className="flex items-center">
                            <div className="w-1 h-6 bg-[#0047fb] rounded-r-md mr-4"></div>
                            <span className="text-[#071343] font-bold text-sm">Title & Date</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1 h-6 bg-transparent mr-4"></div>
                            <span className="text-gray-400 font-bold text-sm">Location</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1 h-6 bg-transparent mr-4"></div>
                            <span className="text-gray-400 font-bold text-sm">Details</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1 h-6 bg-transparent mr-4"></div>
                            <span className="text-gray-400 font-bold text-sm">Budget</span>
                        </div>
                    </nav>
                </aside>

                {/* Form Content */}
                <main className="w-full md:w-3/4 py-12 px-6 md:px-16 flex flex-col">
                    <h1 className="text-4xl md:text-[44px] font-black tracking-tighter text-[#071343] mb-12 leading-tight">
                        Let's start with the basics
                    </h1>

                    <form className="flex-grow flex flex-col">

                        {/* Field: What do you need done? */}
                        <div className="mb-10">
                            <label className="block text-[#071343] font-bold text-base mb-3">
                                In a few words, what do you need done?
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Help move my sofa"
                                className="w-full bg-[#f3f6ff] border border-orange-500 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm text-base"
                                defaultValue=""
                            />
                            <p className="text-orange-500 font-medium text-sm mt-2">
                                This field is required
                            </p>
                        </div>

                        {/* Field: When do you need this done? */}
                        <div className="mb-8">
                            <label className="block text-[#071343] font-bold text-base mb-4">
                                When do you need this done?
                            </label>
                            <div className="flex flex-wrap gap-3">
                                <button type="button" className="border border-[#071343] text-[#071343] bg-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-gray-50 transition flex items-center gap-2">
                                    On date
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>
                                <button type="button" className="border border-[#071343] text-[#071343] bg-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-gray-50 transition flex items-center gap-2">
                                    Before date
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>
                                <button type="button" className="bg-[#071343] text-white border border-[#071343] px-6 py-2.5 rounded-full font-bold text-sm transition shadow-sm">
                                    I'm flexible
                                </button>
                            </div>
                        </div>

                        {/* Field: Checkbox */}
                        <div className="mb-auto pb-12">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-[#0047fb] transition">
                                    {/* Unchecked state */}
                                </div>
                                <span className="text-[#071343] font-medium text-sm">
                                    I need a certain time of day
                                </span>
                            </label>
                        </div>

                        {/* Next Button Footer inside main content area */}
                        <div className="fixed bottom-0 left-0 right-0 md:static md:w-full bg-white p-4 md:p-0 border-t border-gray-200 md:border-none md:mt-12 flex justify-center">
                            <button type="button" className="w-full md:w-3/4 max-w-sm bg-[#0047fb] text-white py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-md">
                                Next
                            </button>
                        </div>

                    </form>

                </main>
            </div>
        </div>
    );
};

export default PostTask;
