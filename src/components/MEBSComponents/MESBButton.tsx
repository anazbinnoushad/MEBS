type MESBButtonProps = {
    text: string,
    onClick?: () => void,
    variant?: "primary" | "secondary",
    type?: "button" | "submit" | "reset"
}

const MESBButton = ({ text, onClick, variant = "primary", type = "button" }: MESBButtonProps) => {
    return (
        <button className={`py-2 px-5 md:py-2 md:px-4 rounded-md  text-base font-medium capitalize ${variant === "secondary" ? `bg-white border border-accent text-accent` : `bg-accent text-white`}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
}

export default MESBButton;