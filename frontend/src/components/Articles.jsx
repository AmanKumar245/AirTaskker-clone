import React from 'react';

const articles = [
    {
        title: "How Evergreen Walls grew its national footprint with on-demand couriers and installers",
        desc: "The shift to using Airtasker for logistics changed the game for Evergreen Walls.",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        linkText: "Read more"
    },
    {
        title: "Airtasker names top Aussie Taskers of 2025",
        desc: "Get to know the top Taskers for 2025!",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        linkText: "Read more"
    },
    {
        title: "And the Podium Prize Winner Is...",
        desc: "Learn more below.",
        img: "https://images.unsplash.com/photo-1533227260871-108262689f20?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        linkText: "Read more"
    }
];

const Articles = () => {
    return (
        <div className="bg-[#eef3fb] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#071343] tracking-tighter leading-tight">
                        Articles, stories and more
                    </h2>
                    <button className="bg-[#0047fb] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition flex-shrink-0">
                        Visit our blog
                    </button>
                </div>

                {/* Article Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full cursor-pointer group">
                            {/* Image */}
                            <div className="h-48 md:h-56 w-full overflow-hidden">
                                <img
                                    src={article.img}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-[#071343] mb-3 leading-snug">
                                    {article.title}
                                </h3>
                                <p className="text-[#071343] font-medium text-sm leading-relaxed mb-6 flex-grow opacity-80">
                                    {article.desc}
                                </p>
                                <a href="#" className="text-[#0047fb] font-bold text-sm hover:underline mt-auto">
                                    {article.linkText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Articles;
