import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

type MEBSDropMenuProps = {
    children: React.ReactNode,
    menuList: any
}

const MEBSDropMenu = ({ children, menuList }: MEBSDropMenuProps) => {
    return (
        <Menu as="div" className=" inline-block text-left">
            <Menu.Button>{children}</Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className={`absolute flex flex-col w-48 border divide-y-1 divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-gray-50 ring-opacity-5 focus:outline-none z-40 "origin-bottom-left right-0 mt-2 p-2"`}
                >
                    {menuList?.map((item: any, idx: number) => (
                        <Menu.Item key={idx} as="div" className=" text-base uppercase cursor-pointer" onClick={() => item?.action()}>
                            {({ active }) => (
                                <p
                                    className={`${active
                                        ? "bg-[#E5E5E5] text-black text-sm  w-full p-2"
                                        : "p-2 text-black text-sm"
                                        }`}
                                >
                                    {item?.label}
                                </p>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default MEBSDropMenu;