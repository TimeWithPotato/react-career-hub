import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center">Ooppss..!!!</h1>
            <p className="text-center">{err.statusText || err.message}</p>
            <button className="bg-slate-200 px-7 py-3 text-blue-500 font-bold rounded-lg mt-3 hover:bg-slate-400 duration-200" onClick={handleGoBack}>GO BACK</button>
        </div>
    );
};

export default ErrorPage;