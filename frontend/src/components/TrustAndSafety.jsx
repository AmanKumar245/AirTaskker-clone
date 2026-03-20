import React from 'react';

const features = [
    {
        icon: (
            <svg className="w-6 h-6 text-[#0047fb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Secure payments",
        desc: "Only release payment when the task is completed to your satisfaction",
        linkText: "read more"
    },
    {
        icon: (
            <svg className="w-6 h-6 text-[#0047fb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
        title: "Trusted ratings and reviews",
        desc: "Pick the right person for the task based on real ratings and reviews from other users",
        linkText: "read more"
    },
    {
        icon: (
            <svg className="w-6 h-6 text-[#0047fb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Insurance for peace of mind",
        desc: "We provide liability insurance for Taskers performing most task activities",
        linkText: "read more"
    }
];

const TrustAndSafety = () => {
    return (
        <div className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                {/* Left Side: Image Composition */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start pt-12 pl-4">

                    {/* Main Image */}
                    <div className="relative z-0 w-[80%] max-w-[400px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden ml-8">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Happy woman looking trusted" className="w-full h-auto object-cover" />

                        {/* Blue illustrative overlay elements to match the stylistic flair */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20 bg-blue-500 rounded-full blur-2xl"></div>
                    </div>

                    {/* Floater: 5.0 Rating */}
                    <div className="absolute top-0 left-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-4 flex items-center gap-4 z-10">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="User 1" />
                        </div>
                        <div>
                            <div className="font-black text-xl text-[#071343] flex items-center gap-1">
                                5.0 <span className="text-orange-500 text-lg">★</span>
                            </div>
                            <div className="text-xs font-bold text-gray-500">Overall Rating</div>
                        </div>
                    </div>

                    {/* Floater: Job Completed */}
                    <div className="absolute bottom-24 -right-8 md:-right-4 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-5 py-3 flex items-center gap-2 z-10">
                        <svg className="w-5 h-5 text-[#0047fb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span className="text-sm font-bold text-[#071343]">Job completed</span>
                        <span className="text-xs text-gray-400 font-semibold ml-1">2m ago</span>
                    </div>

                    {/* Floater: Payment Released */}
                    <div className="absolute bottom-6 left-12 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-5 py-3 flex items-center gap-2 z-10 w-max">
                        <svg className="w-5 h-5 text-[#0047fb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-bold text-[#071343]">Payment released</span>
                        <span className="text-xs text-gray-400 font-semibold ml-1">2m ago</span>
                    </div>

                </div>

                {/* Right Side: Text & Features */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-[#071343] leading-[1.05] tracking-tighter mb-10 text-left">
                        Trust and safety<br /> features for your<br /> protection
                    </h2>

                    <div className="space-y-8 mb-10">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#071343] mb-1">{feature.title}</h3>
                                    <p className="text-[#071343] font-medium leading-snug mb-1 text-[15px]">{feature.desc}</p>
                                    <a href="#" className="text-[#0047fb] font-bold text-sm hover:underline">{feature.linkText}</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="bg-[#0047fb] text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-blue-700 transition w-full sm:w-auto">
                        Post your task for free
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TrustAndSafety;
