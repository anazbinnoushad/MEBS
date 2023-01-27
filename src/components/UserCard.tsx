const UserCard = ({ data }: any) => {
    return (
        <div className="w-52 flex flex-col gap-3 relative border p-2">
            <div className="w-[200px] flex justify-center">
                <img src={data?.image} className=" h-36" />
            </div>
            <div className=" flex flex-col gap-0 text-sm">
                <a className=" text-base font-medium">{data?.firstName}{" "}{data?.lastName}</a>
                <a>Age : <span>{data?.age}</span></a>
                <a>Email : <span>{data?.email}</span></a>
                <a>Gender : <span>{data?.gender}</span></a>
                <a>University : <span>{data?.university}</span></a>
            </div>
        </div>
    );
}

export default UserCard;