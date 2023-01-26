const MEBSInput = ({ className, label, type, required }: any) => {
    return (
        <div className={className}>
            <label className=" capitalize mb-1 block text-sm font-medium text-black">
                {label}
                {required && "*"}
            </label>
            <input
                className="block rounded-md w-full border placeholder:capitalize h-[38px] border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-1 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
                type={type}
                required={required}
            />
        </div>
    );
}

export default MEBSInput;