import MEBSInput from "./MEBSInput";

const MEBSFrom = ({ data, onChangeData, ...props }: any) => {
    // console.log(`MEBSFrom,  : Props`, props.fields)

    const handleChange = (id: string, value: any) => {
        onChangeData && onChangeData({ ...data, [id]: value || "" });
    }
    return (
        <div className={`capitalize  max-w-[1024px] ${props.fieldClass}`}>
            {props?.fields?.map((field: any, idx: number) => {
                switch (field?.type) {
                    case "text":
                        return <MEBSInput
                            key={`INPL_${idx}`}
                            label={field?.label}
                            type={field?.type}
                            required={field?.required}
                            onChange={({ target }: any) => handleChange(target?.id, target.value)}
                            id={field?.id}
                        />
                    default:
                        return <MEBSInput
                            key={`INPL_${idx}`}
                            label={field?.label}
                            type={field?.type}
                            required={field?.required}
                            onChange={({ target }: any) => handleChange(target?.id, target.value)}
                            id={field?.id}
                        />
                }
            })}
        </div>
    );
}

export default MEBSFrom;