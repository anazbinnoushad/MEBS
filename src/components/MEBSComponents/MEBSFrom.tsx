import MEBSInput from "./MEBSInput";

const MEBSFrom = ({ ...props }) => {
    // console.log(`MEBSFrom,  : Props`, props.fields)
    return (
        <div className={`capitalize  max-w-[1024px] ${props.fieldClass}`}>
            {props?.fields?.map((field: any, idx: number) => {
                switch (field?.type) {
                    case "text":
                        return <MEBSInput key={`INPL_${idx}`} label={field?.label} type={field?.type} required={field?.required} />
                    default:
                        return <MEBSInput key={`DEFIN_${idx}`} label={field?.label} type={field?.type} required={field?.required} />
                }
            })}
        </div>
    );
}

export default MEBSFrom;