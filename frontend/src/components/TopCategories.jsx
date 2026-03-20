import React, { useState } from 'react';

const categoryTabs = [
    "A-C", "D-G", "H-P", "R-Z", "Cost Guides", "How to Guides", "Checklist", "Comparisons"
];

const categoryLinks = [
    "Aircon Repair", "At-home Personal Trainer", "Baristas", "Bicycle Tyre Repair",
    "Boxing Instructors", "Business Planners", "Carpet Laying", "Ceiling Cleaners",
    "Clown Hire", "Curtain Rod Installers", "Artificial Grass Install", "Attic Cleaners",
    "Bartenders", "Bird Sitters", "Bull Bar Installers", "Cake Decorators",
    "Cat Groomers", "Children Entertainers", "Coffee Machine Repairs", "Customer Service Staffing",
    "At-home Hair Extensions", "Babysitters", "Basketball Hoop System Assembly",
    "Bookkeepers", "Bunnings Shed Install", "Car Aircon Regas Specialists",
    "Catalogue Distribution", "Clothesline Installers", "Computer Repairs"
];

const flags = [
    { name: "Airtasker Ireland", icon: "🇮🇪" },
    { name: "Airtasker New Zealand", icon: "🇳🇿" },
    { name: "Airtasker Singapore", icon: "🇸🇬" },
    { name: "Airtasker United Kingdom", icon: "🇬🇧" },
    { name: "Airtasker United States", icon: "🇺🇸" }
];

const TopCategories = () => {
    const [activeTab, setActiveTab] = useState("A-C");

    return (
        <div className="bg-[#eef3fb] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main White Box */}
                <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm flex flex-col md:flex-row gap-8 lg:gap-16">

                    {/* Left Column */}
                    <div className="w-full md:w-1/4 flex flex-col items-start gap-4">
                        <div className="w-20 md:w-24 mb-4">
                            {/* Graphic Placeholder (matching the toolkit illustration vibe) */}
                            <svg viewBox="0 0 100 100" fill="none" className="w-full h-auto text-[#071343]">
                                <path d="M50 10 L50 90 M20 40 L80 40" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                                <circle cx="50" cy="50" r="40" stroke="#0047fb" strokeWidth="8" />
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#071343] tracking-tighter leading-tight">
                            Top Categories
                        </h2>
                        <p className="text-[#071343] font-medium text-sm leading-relaxed max-w-[200px]">
                            See some of our top categories in your area
                        </p>
                    </div>

                    {/* Right Column: Interactive Tabs and List */}
                    <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-8">

                        {/* Vertical Tabs */}
                        <div className="w-full md:w-48 flex flex-row md:flex-col overflow-x-auto md:overflow-visible flex-shrink-0 border-b md:border-b-0 border-gray-200">
                            {categoryTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-4 md:py-3 px-2 md:px-0 text-left font-bold text-sm whitespace-nowrap transition-colors border-b-2 md:border-b-0 md:border-l-2 pl-0 md:pl-4 mb-0 md:mb-2 ${activeTab === tab
                                            ? "text-[#0047fb] border-[#0047fb]"
                                            : "text-[#071343] border-transparent hover:text-[#0047fb]"
                                        }`}
                                    style={{
                                        borderBottomWidth: activeTab === tab ? (window.innerWidth < 768 ? '2px' : '0') : '0',
                                        borderLeftWidth: activeTab === tab ? (window.innerWidth >= 768 ? '2px' : '0') : '0',
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Links Grid */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                                {categoryLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="text-xs font-bold text-[#071343] hover:text-[#0047fb] truncate transition-colors"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Global Flags Footer */}
                <div className="mt-16 flex flex-wrap justify-center gap-6 items-center">
                    {flags.map((flag) => (
                        <a key={flag.name} href="#" className="flex items-center gap-2 group">
                            <span className="text-xl">{flag.icon}</span>
                            <span className="text-xs font-bold text-[#071343] group-hover:text-[#0047fb] transition-colors max-w-[80px] leading-tight">
                                {flag.name.replace('Airtasker', 'Airtasker\n')}
                            </span>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TopCategories;
