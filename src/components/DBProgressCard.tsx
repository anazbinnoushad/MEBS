import { UserGroupIcon } from "@heroicons/react/24/solid";

type DBProgressCardProps = {
    data: {
        total: number,
        progress: number,
        this_week: number,
        last_week: number
    },
    title: string,
    preIcon: React.ReactNode,
}

const DBProgressCard = ({ data, title, preIcon }: DBProgressCardProps) => {
    return (
        <div className=" border flex flex-col rounded-lg overflow-clip bg-white">
            <div className=" bg-slate-100 flex gap-3 px-5 p-3 border-b">
                {preIcon}
                <a className=" text-lg font-semibold">{title}</a>
            </div>
            <div className="px-5 py-5 flex flex-col gap-6">
                <div>
                    <p className="text-xs">Total {title}{` `}{data?.total.toFixed(2)}</p>
                    <div className="mt-2 w-full bg-slate-200 h-3 rounded-full">
                        <div className={` h-3 rounded-full bg-accent`} style={{ width: `${data?.progress}%` }}>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className=" border-r border-r-1">
                        <p className="text-xs font-bold text-accent">LAST WEEK</p>
                        <p className="font-semibold text-lg">{data?.last_week.toFixed(2)}</p>
                    </div>
                    <div className="pl-5">
                        <p className="text-xs font-bold text-green-600">THIS WEEK</p>
                        <p className="font-semibold text-lg">{data?.this_week.toFixed(2)}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DBProgressCard;