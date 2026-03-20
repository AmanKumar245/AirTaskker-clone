import React from 'react';
import { Link } from 'react-router-dom';

const EarnMoney = () => {
    return (
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl mx-auto w-full">
            <div className="bg-[#0047fb] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 py-12 md:p-16 w-full shadow-lg">

                {/* Left Content */}
                <div className="w-full md:w-1/2 text-white mb-10 md:mb-0 md:pr-12 lg:pr-24 flex flex-col items-start">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-6">
                        Be your own boss
                    </h1>
                    <p className="text-xl md:text-2xl font-bold mb-10 leading-snug">
                        Earn up to $10,750 a month on Airtasker*
                    </p>

                    <button className="bg-[#071343] text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-800 transition flex items-center gap-3 shadow-md mb-8">
                        Join Airtasker
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    <p className="text-sm font-semibold opacity-90">
                        *Based on the average monthly earnings of the top 1%
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 relative">
                    <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                        <img
                            src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800&q=80"
                            alt="Craftsman working"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Illustrative Vectors (Mockup) */}
                        <div className="absolute inset-0 pointer-events-none opacity-90 flex items-end justify-end p-8">
                            <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 text-[#0047fb]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                {/* Mock outline of a drill */}
                                <path d="M40 20 L60 20 L60 50 L70 50 L70 60 L60 60 L60 90 L40 90 L40 60 L30 60 L30 50 L40 50 Z" className="fill-[#0047fb] stroke-white" />
                                <path d="M48 90 L50 100 L52 90" className="stroke-white" />
                                <circle cx="80" cy="80" r="2" fill="currentColor" />
                                <circle cx="20" cy="70" r="2" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EarnMoney;
