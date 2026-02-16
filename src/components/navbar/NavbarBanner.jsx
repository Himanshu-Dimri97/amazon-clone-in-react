import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNavbarLinks, getCategories, getSubcategories } from "../../api/api";

const NavbarBanner = () => {
    const [links, setLinks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        getNavbarLinks().then(setLinks);
        getCategories().then(setCategories);
        getSubcategories().then(setSubcategories);
    }, []);

    const getCategorySlug = (id) => {
        const cat = categories.find((c) => c.id === id);
        return cat?.slug;
    };

    const getSubSlug = (id) => {
        const sub = subcategories.find((s) => s.id === id);
        return sub?.slug;
    };

    return (
        <div className="flex items-center gap-4 px-3 bg-[#232f3e] h-10 overflow-x-auto">

            <div className="flex items-center gap-1 border border-transparent hover:border-white px-2 cursor-pointer">
                <Menu className="text-white" size={20} />
                <span className="text-white font-bold text-sm">All</span>
            </div>

            {links.map((link) => {
                let path = "#";

                if (link.type === "static") {
                    path = link.path;
                }

                if (link.type === "category") {
                    const slug = getCategorySlug(link.refId);
                    path = `/${slug}`;
                }

                if (link.type === "subcategory") {
                    const slug = getSubSlug(link.refId);
                    path = `/${slug}`;
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
