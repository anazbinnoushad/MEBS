import { useNavigate } from "react-router-dom";
import MEBSInput from "../components/MEBSComponents/MEBSInput";

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className=" relative min-h-screen w-screen overflow-y-auto flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className=" bg-white p-5 rounded-md w-96 max-w-xl flex flex-col gap-3">
                <div>
                    <a className=" text-lg font-semibold">MESB</a>
                </div>
                <form className=" flex flex-col gap-6 mt-5" onSubmit={() => navigate("/dashboard")}>
                    <div className="flex flex-col gap-6">
                        <MEBSInput label="Email" type="email" required={true} />
                        <MEBSInput label="Password" type="password" required={true} />
                    </div>
                    <div className=" flex justify-between items-center">
                        <div className=" flex gap-1 items-center">
                            <input type="checkbox" />
                            <a className=" text-sm">Remember Me</a>
                        </div>
                        <a className=" text-accent text-xs text-right">Forget password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex h-9 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >Login</button>
                </form>
                <div>
                    <a className=" text-sm">Don't have an account? <span className=" text-accent">Register</span></a>
                </div>
            </div>
        </div>
    );
}

export default Login;