import TheContent from "./TheContent";
import TheHeader from "./TheHeader";
import TheSidebar from "./TheSidebar";

const TheLayout = () => {
    return (
        <div className="h-screen flex bg-body transform-gpu  scrollbar-hide ">
            <div>
                <TheSidebar />
            </div>
            <div className="grow flex flex-col ">
                <div>
                    <TheHeader />
                </div>
                <div className="grow flex flex-col overflow-clip transform-gpu">
                    <TheContent />
                </div>
            </div>
        </div>
    );
}

export default TheLayout;