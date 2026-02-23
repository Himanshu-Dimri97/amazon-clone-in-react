const Footer = () => {
    const options = [
        {
            title: "Get to Know Us",
            items: ["About Amazon", "Careers", "Press Releases", "Amazon Science"]
        },
        {
            title: "Connect with Us",
            items: ["Facebook", "Twitter", "Instagram"]
        },
        {
            title: "Make Money with Us",
            items: ["Sell on Amazon", "Become an Affiliate", "Amazon Global Selling", "Sell to Amazon"]
        },
        {
            title: "Let Us Help You",
            items: ["Your Account", "Returns Center", "Help"]
        }
    ];

    return (
        <footer className="w-full mt-10">
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-[#37475A] text-white text-center py-3 cursor-pointer hover:bg-[#485769]"
            >
                Back to top
            </div>

            <div className="bg-[#232F3E] text-white py-10 px-6">
                <div className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    gap-8 
                    max-w-6xl 
                    mx-auto
                ">
                    {options.map((option, index) => (
                        <ul key={index}>
                            <h3 className="text-lg font-bold mb-3">{option.title}</h3>

                            {option.items.map((item, i) => (
                                <li key={i} className="mb-2">
                                    <a href="#" className="hover:underline text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

            <div className="bg-[#232F3E] border-t border-gray-600 py-6">
                <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm">
                    <a href="#" className="border px-4 py-1 rounded hover:border-white">
                        English
                    </a>
                    <a href="#" className="border px-4 py-1 rounded hover:border-white">
                        India
                    </a>
                </div>
            </div>

            <div className="bg-[#131A22] text-gray-400 text-center text-xs py-6 px-4 space-y-2">
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#" className="hover:underline">Conditions of Use</a>
                    <a href="#" className="hover:underline">Privacy Notice</a>
                    <a href="#" className="hover:underline">Interest-Based Ads</a>
                </div>

                <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    );
};

export default Footer;