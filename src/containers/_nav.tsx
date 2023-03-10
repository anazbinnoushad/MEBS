import {
    BuildingStorefrontIcon,
    ChartBarIcon,
    ChartBarSquareIcon,
    PresentationChartBarIcon,
    UserGroupIcon,
    UserIcon
} from "@heroicons/react/24/outline"

const _nav: any = [
    {
        _tag: "NavItem",
        path: "/dashboard",
        name: "Dashboard",
        icon: <PresentationChartBarIcon />,
    },
    {
        _tag: "NavItem",
        path: "/adduser",
        name: "Add User",
        icon: <UserIcon />,
    },
    {
        _tag: "NavItem",
        path: "/users",
        name: "Users",
        icon: <UserGroupIcon />,
    },
    {
        _tag: "NavItem",
        path: "/analytics",
        name: "Analytics",
        icon: <ChartBarSquareIcon />,
    },
    {
        _tag: "NavItem",
        path: "/alternative",
        name: "Alternative",
        icon: <ChartBarIcon />,
    },
    {
        _tag: "NavItem",
        path: "/inventory",
        name: "Inventory",
        icon: <BuildingStorefrontIcon />,
    },
]

export default _nav;