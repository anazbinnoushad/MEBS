import {
    BuildingStorefrontIcon,
    ChartBarIcon,
    ChartBarSquareIcon,
    PresentationChartBarIcon
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