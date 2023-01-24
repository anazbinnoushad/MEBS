import useDemoConfig from "./useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";


const DBLineChart = () => {

    const { data, randomizeData } = useDemoConfig({
        series: 3,
        dataType: "time",
    });


    const primaryAxis = React.useMemo<AxisOptions<typeof data[number]["data"][number]>>(
        () => ({
            getValue: (datum) => datum.primary as unknown as Date,
        }),
        []
    );

    const secondaryAxes = React.useMemo<AxisOptions<typeof data[number]["data"][number]>[]>(
        () => [
            {
                getValue: (datum) => datum.secondary,
            },
        ],
        []
    );

    return (
        <div className=" h-[300px] relative">
            <Chart
                options={{
                    data,
                    primaryAxis,
                    secondaryAxes,
                    tooltip: false
                }} />
        </div>
    );
}

export default DBLineChart;