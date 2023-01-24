type MESBCardProps = {
    children: React.ReactNode
    className?: string
}
const MEBSCard = ({ children, className }: MESBCardProps) => {
    return (
        <div className={`flex-1 border bg-white rounded-lg overflow-hidden ${className}`}>
            {children}
        </div>
    );
}

export default MEBSCard;