const Footer = () => {
    return (
        <footer className="mt-10">

            {/* BACK TO TOP */}
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-[#37475A] text-white text-center py-3 cursor-pointer hover:bg-[#485769]"
            >
                Back to top
            </div>

            {/* MAIN LINKS */}
            <div className="bg-[#232F3E] text-white py-10">
                <div className="flex justify-center gap-32 text-sm">
                    {/* Column 1 */}
                    <ul>
                        <h3 className="text-lg font-bold mb-3">Get to Know Us</h3>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">About Amazon</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Press Releases</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Amazon Science</a>
                        </li>
                    </ul>

                    {/* Column 2 */}
                    <ul>
                        <h3 className="text-lg font-bold mb-3">Connect with Us</h3>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Instagram</a>
                        </li>
                    </ul>

                    {/* Column 3 */}
                    <ul>
                        <h3 className="text-lg font-bold mb-3">Make Money with Us</h3>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Sell on Amazon</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Become an Affiliate</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Amazon Global Selling</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Sell to Amazon</a>
                        </li>
                    </ul>

                    {/* Column 4 */}
                    <ul>
                        <h3 className="text-lg font-bold mb-3">Let Us Help You</h3>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Your Account</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="mb-2 hover:underline">Returns Centre</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Help</a>
                        </li>
                    </ul>

                </div>
            </div>

            {/* LANGUAGE BAR */}
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

            {/* BOTTOM COPYRIGHT */}
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
