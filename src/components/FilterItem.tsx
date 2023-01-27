const FilterItem = ({ item, setSearchParams, searchParams, type }: any) => {
    const handleCheck = () => {
        if (searchParams?.get(type) === item?.title) {
            setSearchParams({})
        } else {
            setSearchParams({ [type]: item?.value })
        }
    }
    return (
        <div className=" p-1 flex gap-2 items-center cursor-pointer" onClick={() => handleCheck()}>
            <input type="checkbox" checked={item?.value === searchParams?.get(type)} onChange={() => handleCheck()} />
            <a className=" capitalize text-sm">{item?.label}</a>
        </div>
    );
}

export default FilterItem;