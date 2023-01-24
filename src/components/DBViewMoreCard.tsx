import { ArrowRightIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import MEBSCard from "./MEBSComponents/MEBSCard";

const DBViewMoreCard = () => {
    return (
        <MEBSCard className=" flex flex-col p-4 py-5 justify-between  gap-2">
            <div className=" flex  flex-col gap-2">
                <div className="p-2 w-fit border-2 border-accent rounded-md">
                    <PaperClipIcon className=" w-6 stroke-accent" />
                </div>
                <a className=" text-lg font-semibold">3000</a>
            </div>
            <div className=" flex flex-col gap-2">
                <a className=" text-sm">Attached files</a>
                {/* <a className=" text-xs">
                    lorem ipsum dolor sit amet, consectetur adipiscing
                </a> */}
                <div className=" flex gap-1 text-xs items-center cursor-pointer text-accent">
                    <a>View in detail</a>
                    <ArrowRightIcon className=" w-3" />
                </div>
            </div>
        </MEBSCard>
    );
}

export default DBViewMoreCard;