import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../components/Button";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="flex justify-center">
            <div className="p-4">
                <h1 className="text-2xl mb-4">Welcome, {user.name}</h1>
                <div className="flex justify-center">
                    <Button onClick={logout} text={"Logout"} className="bg-red-500 hover:bg-red-600" />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;