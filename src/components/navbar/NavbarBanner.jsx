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
        (categories || []).map(c => [String(c.id), c.slug])
    );

    const subMap = Object.fromEntries(
        (subcategories || []).map(s => [String(s.id), s.slug])
    );


    return (
        <div className="flex items-center gap-4 px-3 bg-[#232f3e] h-10 overflow-x-auto">

            <div className="flex items-center gap-1 border border-transparent hover:border-white px-2 cursor-pointer">
                <Menu className="text-white" size={20} />
                <span className="text-white font-bold text-sm">All</span>
            </div>

            {links.map((link) => {
                // console.log("LINK:", link)
                // console.log("categoryMap:", categoryMap);
                // console.log("subMap:", subMap);
                let path = "#";

                if (link.type === "static") {
                    path = link.path;
                }
                if (link.type === "category") {
                    const slug = categoryMap[String(link.refId)];
                    path = slug ? `/${slug}` : "#";
                }

                if (link.type === "subcategory") {
                    const slug = subMap[String(link.refId)];
                    path = slug ? `/${slug}` : "#";
                }

                return (
                    <Link
                        key={link.id}
                        to={path}
                        className="text-white font-semibold text-sm border border-transparent hover:border-white px-2 py-1 whitespace-nowrap"
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavbarBanner;
