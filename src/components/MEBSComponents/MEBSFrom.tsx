import MEBSInput from "./MEBSInput";

const MEBSFrom = ({ ...props }) => {
    console.log(`MEBSFrom,  : Props`, props.fields)
    return (
        <div className={`capitalize  max-w-[1024px] ${props.fieldClass}`}>
            {props?.fields?.map((field: any) => {
                switch (field?.type) {
                    case "text":
                        return <MEBSInput label={field?.label} type={field?.type} required={field?.required} />
                    default:
                        return <MEBSInput label={field?.label} type={field?.type} required={field?.required} />
                }
            })}
        </div>
    );
}

export default MEBSFrom;