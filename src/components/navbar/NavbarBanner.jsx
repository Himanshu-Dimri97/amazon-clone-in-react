import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNavbarLinks, getCategories, getSubcategories } from "../../api/api";


const NavbarBanner = () => {

    const [links, setLinks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        Promise.all([
            getNavbarLinks(),
            getCategories(),
            getSubcategories(),
        ]).then(([links, cats, subs]) => {
            setLinks(links);
            setCategories(cats);
            setSubcategories(subs);
        });
    }, []);

    const categoryMap = Object.fromEntries(
        (categories || []).map(c => [c.id, c.slug])
    );

    const subMap = Object.fromEntries(
        (subcategories || []).map(s => [s.id, s.slug])
    );


    return (
        <div className="relative bg-[#232f3e]">

            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-[#232f3e] to-transparent z-10"></div>

            <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-[#232f3e] to-transparent z-10"></div>

            <div className="flex items-center gap-3 px-4 h-10 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">


                {links.map((link) => {
                    let path = "#";

                    if (link.type === "static") path = link.path;

                    if (link.type === "category") {
                        const slug = categoryMap[link.refId];
                        path = slug ? `/${slug}` : "#";
                    }

                    if (link.type === "subcategory") {
                        const slug = subMap[link.refId];
                        path = slug ? `/${slug}` : "#";
                    }

                    return (
                        <Link
                            key={link.id}
                            to={path}
                            className="text-white font-semibold text-sm border border-transparent hover:border-white px-3 py-1 shrink-0 transition"
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default NavbarBanner;
