const ProfileTileView = () => {
    return (
        <div className=" px-5 py-3 grid items-center grid-cols-5 gap-2 hover:bg-white/10 border-y border-gray-700">
            <div className=" w-10 col-span-1  bg-blue-100/10  aspect-square  rounded-full overflow-hidden">
                <img src={"/image_sample.png"} />
            </div>
            <div className="flex flex-col col-span-4 px-3 text-white">
                <a className=" text-sm font-semibold">Aswin Raj</a>
                <a className=" text-xs">aswinraj@gmail.com</a>
            </div>
        </div>
    );
}

export default ProfileTileView;