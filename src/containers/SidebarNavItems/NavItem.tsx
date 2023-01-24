import { useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ item }: any) => {
    const location = useLocation();
    const navigate = useNavigate()
    const currentPath = location?.pathname;
    const path = item?.path;

    const isActive = currentPath === path;

    const name = item?.name;

    const title = name?.replaceAll("-", " ") || "";

    return (
        <div className={`no-select h-8 text-white/90 flex gap-2 items-center cursor-pointer group hover:bg-white/10 rounded-lg p-5 ${isActive ? `bg-white/10` : ""}`} onClick={() => navigate(item?.path || "/")}>
            {item?.icon && (
                <div
                    className={` ${isActive ? "text-white w-6" : "text-white w-6"
                        } group-hover:w-6 transform-gpu transition-all ease-in rounded-[4px] p-[2px] aspect-square  group-hover:text-white`}
                >
                    {item.icon}
                </div>
            )}
            <a className={`${isActive ? "text-white font-bold" : "text-white"} capitalize text-base font-normal group-hover:text-white select-none`}>
                {title}
            </a>
        </div>
    );
}

export default NavItem;