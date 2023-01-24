import { Cog6ToothIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { Bars3BottomLeftIcon, BellIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import MEBSDropMenu from "../components/MEBSComponents/MEBSDropMenu";

const TheHeader = () => {
    const navigate = useNavigate()
    const menuList = [
        { label: "Profile", action: () => navigate(`/profile`), preIcon: <UserIcon className=" w-4" /> },
        { label: "Settings", action: () => navigate(`/settings`), preIcon: <Cog6ToothIcon className=" w-4" /> },
        { label: "Log out", action: () => navigate(`/logout`), preIcon: <LockClosedIcon className=" w-4" /> },
    ]
    return (
        <div className=" bg-white h-16 border-b px-4 flex justify-between items-center ">
            <div className=" flex gap-3">
                <a onClick={() => navigate("/")} className=" cursor-pointer">Dashboard</a>
                <a onClick={() => navigate("/settings")} className=" cursor-pointer">Settings</a>
            </div>
            <div className=" flex gap-3">

                <div className="p-2 border h-fit rounded-lg hover:animate-pulse cursor-pointer">
                    <Bars3BottomLeftIcon className="h-4 aspect-square" />
                </div>
                <div className="p-2 border h-fit rounded-lg hover:animate-pulse cursor-pointer">
                    <BellIcon className="h-4 w-4" />
                </div>
                <div className="relative">
                    <MEBSDropMenu menuList={menuList}>
                        <div className="h-9 w-9 cursor-pointer rounded-full">
                            <img src="/avatar.png" alt="profile" />
                        </div>
                    </MEBSDropMenu>
                </div>


            </div>
        </div>
    );
}

export default TheHeader;