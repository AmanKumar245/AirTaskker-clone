import React from 'react';

const Hero = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
            <div className="bg-[#071343] rounded-[32px] mx-auto text-center relative overflow-hidden px-4 py-16 md:py-24 shadow-lg min-h-[500px] flex flex-col justify-center items-center">

                {/* Decorative Stars pseudo-elements */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-50 blur-[2px]"></div>
                <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-white rounded-full opacity-70"></div>
                <div className="absolute right-1/4 top-1/5 w-2 h-2 bg-white rounded-full opacity-60 blur-[1px]"></div>
                <div className="absolute right-1/6 top-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
                <div className="absolute bottom-1/4 left-1/5 w-2.5 h-2.5 bg-white rounded-full opacity-50 blur-[1px]"></div>
                <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-white rounded-full opacity-80"></div>

                {/* Main Text graphic approximation */}
                <div className="relative z-10 mb-8 max-w-4xl mx-auto -rotate-2 transform scale-110">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] italic flex flex-col items-center">
                        <span className="block drop-shadow-md">GET ANYTHING</span>
                        <span className="block drop-shadow-md text-transparent [-webkit-text-stroke:2px_white] bg-clip-text mt-[-10px]">DONE</span>
                    </h1>
                </div>

                {/* Subheading */}
                <div className="relative z-10 text-white mt-8 mb-8">
                    <p className="text-xl md:text-2xl font-bold tracking-tight">Post any task. Pick the best person. Get it done.</p>
                </div>

                {/* Action Buttons */}
                <div className="relative z-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10 w-full sm:w-auto px-4">
                    <button className="bg-[#0047fb] text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center min-w-[240px]">
                        Post your task for free <span className="ml-2">→</span>
                    </button>
                    <button className="bg-white text-gray-900 border border-gray-300 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-50 transition w-full sm:w-auto">
                        Earn money as a Tasker
                    </button>
                </div>

                {/* Stats and Rating */}
                <div className="relative z-10 text-white flex flex-col items-center space-y-4">
                    <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                            1M+ customers
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            2.5M+ tasks done
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            4M+ user reviews
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className="text-green-500 font-bold text-lg flex items-center gap-1">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                            Trustpilot
                        </span>
                        <div className="flex bg-green-500 text-white rounded px-1">
                            ★★★★★
                        </div>
                        <span>4.0 'Great' (13,330 reviews)</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
