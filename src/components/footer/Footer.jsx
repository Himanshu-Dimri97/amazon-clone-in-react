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
        <footer className="mt-10">

            {/* BACK TO TOP */}
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-[#37475A] text-white text-center py-3 cursor-pointer hover:bg-[#485769]"
            >
                Back to top
            </div>

            <div className="bg-[#232F3E] text-white py-10">
                <div className="flex justify-center gap-32 text-sm">
                    {
                        options.map((option, index) => {
                            return (
                                <ul key={index}>
                                    <h3 className="text-lg font-bold mb-3">{option.title}</h3>
                                    {
                                        option.items.map((item, index) => {
                                            return (
                                                <li key={index} className="mb-2" >
                                                    <a href="#" className="hover:underline">{item}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </div>
            </div>

            <div className="bg-[#232F3E] border-t border-gray-600 py-6">
                <div className="flex justify-center gap-6 text-gray-300 text-sm">
                    <a href="#" className="border px-4 py-1 rounded hover:border-white">
                        English
                    </a>
                    <a href="#" className="border px-4 py-1 rounded hover:border-white">
                        India
                    </a>
                </div>
            </div>

            <div className="bg-[#131A22] text-gray-400 text-center text-xs py-6 space-y-2">
                <div className="space-x-3">
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
