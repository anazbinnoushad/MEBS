import NavItem from "./SidebarNavItems/NavItem";
import _nav from "./_nav";

const TheSidebar = () => {
    return (
        <div className="w-[240px] h-full bg-sidebar">
            <div className={` border-b border-b-1 flex-shrink-0 h-16 mx-5  flex flex-col items-start justify-center`}>
                <a className=" text-2xl text-white">MEBS</a>
            </div>
            <div className=" flex-1 overflow-y-scroll scrollbar-hide">
                <div>Profiel Section</div>
                <div className="gap-2 flex flex-col py-4 px-2 ">
                    {_nav.map((item: any, idx: number) => {
                        return (
                            <NavItem key={`ni_${idx}`} item={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default TheSidebar;