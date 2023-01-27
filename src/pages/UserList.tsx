import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import UserCard from "../components/UserCard";

const UserList = () => {
    const [users, setUsers] = useState<any>([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const fetcher = () => {
            axios("https://dummyjson.com/users").then((response: any) => {
                console.log(`Dashboard,  : RES`, response?.data?.users)
                setUsers(response?.data?.users)
            })
        }
        fetcher()
    }, [])

    const SortedList = (type: any) => {
        switch (type) {
            case "age-low-to-high":
                return users.sort((first: any, second: any) => first?.age - second?.age);
            case "age-high-to-low":
                return users.sort((first: any, second: any) => second?.age - first?.age);
            default:
                return users
        }
    }

    const FilteredUser = () => {
        let userList
        if (searchParams?.get("gender")) {
            userList = users?.filter((value: any) => value?.gender === searchParams?.get("gender"))
        } else if (searchParams?.get("sortby")) {
            userList = SortedList(searchParams?.get("sortby"))
        } else {
            userList = users
        }
        return userList || []
    }

    return (
        <div className="p-4 flex justify-center bg-contentbg h-full">
            <div className=" w-full bg-white rounded-md flex justify-between flex-col">
                <div className=" p-4 px-8 border-b">
                    <a className=" text-xl font-medium">Users</a>
                </div>
                <div className=" grid grid-cols-5">
                    <div className=" col-span-1">
                        <FilterBar setSearchParams={setSearchParams} searchParams={searchParams} />
                    </div>
                    <div className=" col-span-4 flex flex-wrap gap-5 md:gap-10 md:my-4 justify-center overflow-y-scroll h-screen">
                        {FilteredUser()?.map((item: any, idx: number) => (
                            <UserCard key={`USE_${idx}`} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );

}
export default UserList