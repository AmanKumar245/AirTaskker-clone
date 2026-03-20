import React from 'react';

const footerLinks = [
    {
        title: "Discover",
        links: [
            "How it works", "Airtasker for business", "Earn money", "Side Hustle Calculator",
            "Search Jobs", "Cost Guides", "Service Guides", "Comparison Guides", "Gift Cards",
            "Student Discount", "Partners", "New users FAQ"
        ]
    },
    {
        title: "Company",
        links: [
            "About us", "Careers", "Media enquiries", "Community Guidelines", "Tasker Principles",
            "Terms and Conditions", "Blog", "Contact us", "Privacy policy", "Investors"
        ]
    },
    {
        title: "Existing Users",
        links: ["Post a task", "Browse tasks", "Login", "Support centre"]
    },
    {
        title: "Popular Categories",
        links: [
            "Handyman Services", "Cleaning Services", "Delivery Services", "Removalists",
            "Gardening Services", "Auto Electricians", "Assembly Services", "All Services"
        ]
    },
    {
        title: "Popular Locations",
        links: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Newcastle", "Canberra"]
    }
];

const Footer = () => {
    return (
        <footer className="bg-[#071343] py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Region: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
                    {footerLinks.map((column, idx) => (
                        <div key={idx}>
                            <h4 className="text-white font-bold text-sm mb-6">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map((link, lidx) => (
                                    <li key={lidx}>
                                        <a href="#" className="text-white hover:text-gray-300 font-medium text-xs tracking-wide">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Middle Region: Sponsorship Logo */}
                <div className="mb-12 border border-gray-700 inline-block rounded p-4 opacity-90 h-16 flex items-center gap-4">
                    <div className="text-white font-bold text-lg flex items-center">
                        VISA
                    </div>
                    <div className="w-px h-full bg-gray-500 transform rotate-12"></div>
                    <div className="text-white font-black text-xl italic tracking-tighter">
                        Airtasker
                    </div>
                </div>

                {/* Bottom Region: Copyright & App Badges */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-gray-800">
                    <div className="text-white text-xs font-bold leading-relaxed">
                        Airtasker Limited 2011-2026 ©, All rights reserved
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        {/* App Store Badge placeholder */}
                        <button className="bg-gray-100 text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-white transition text-left">
                            <span className="text-xl">🍏</span>
                            <div>
                                <div className="text-[8px] font-bold uppercase tracking-wider">Download on the</div>
                                <div className="text-sm font-bold leading-none">App Store</div>
                            </div>
                        </button>
                        {/* Google Play Badge placeholder */}
                        <button className="bg-gray-100 text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-white transition text-left">
                            <span className="text-xl">▶</span>
                            <div>
                                <div className="text-[8px] font-bold uppercase tracking-wider">Android App on</div>
                                <div className="text-sm font-bold leading-none">Google Play</div>
                            </div>
                        </button>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 ml-2">
                            <a href="#" className="text-white hover:text-gray-300 transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition text-xl font-bold">
                                𝕏
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
