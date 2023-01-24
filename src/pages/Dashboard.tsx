import { BanknotesIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import DBLineChart from "../components/Charts/DBLineChart";
import DBProgressCard from "../components/DBProgressCard";
import MEBSCard from "../components/MEBSComponents/MEBSCard";
// import { Chart } from 'react-charts'




const Dashboard = () => {
    return (
        <div className="h-full flex flex-col gap-5 p-5 bg-contentbg overflow-y-scroll">
            <div className=" grid grid-cols-2 gap-5">
                <DBProgressCard data={{ progress: 80, total: 9000, last_week: 4000, this_week: 5000 }} title="User Engagement" preIcon={<UserGroupIcon className=" w-5" />} />
                <DBProgressCard data={{ progress: 40, total: 80000, last_week: 60000, this_week: 20000 }} title="Adv Revenue" preIcon={<BanknotesIcon className=" w-5" />} />
            </div>
            <div>
                {/* <Chart /> */}
                <MEBSCard className=" flex flex-col gap-6">
                    <div className="flex gap-3 px-5 p-3 border-b">
                        <a className=" text-lg">STATISTICS</a>
                    </div>
                    <DBLineChart />
                </MEBSCard>

            </div>
        </div>
    );
}

export default Dashboard;