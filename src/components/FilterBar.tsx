import FilterItem from "./FilterItem";

const filters = [
    { label: "Male", value: `male` },
    { label: "Female", value: `female` },
]

const sortby = [
    { label: "Age low to high", value: "age-low-to-high" },
    { label: "Age high to low", value: "age-high-to-low" },
]

const FilterBar = ({ setSearchParams, searchParams }: any) => {
    return (
        <div className=" p-5">
            <div>
                <a className=" text-lg font-medium">Filters</a>
            </div>
            <div>
                <a className=" text-sm font-medium">Gender</a>
                {filters?.map((item: any, idx: number) => (
                    <FilterItem item={item} searchParams={searchParams} setSearchParams={setSearchParams} type={`gender`} />
                ))}
            </div>
            <div>
                <a className=" text-sm font-medium">Sort by</a>
                {sortby?.map((item: any, idx: number) => (
                    <FilterItem item={item} searchParams={searchParams} setSearchParams={setSearchParams} type={`sortby`} />
                ))}
            </div>
        </div >
    );
}

export default FilterBar;