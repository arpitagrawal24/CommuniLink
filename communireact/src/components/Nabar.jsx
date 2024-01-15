// Nabar.js

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Nabar = () => {

    const [user, setUser] = useState({});

    const getUser = async () => {

        try {
            const response = await axios.get(`${import.meta.env.VITE_API}/login/success`, { withCredentials: true });

            setUser(response.data.user);
        } catch (error) {
            console.error("User error:", error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);


    const logout = () => {
        window.open("https://communilink.onrender.com/logout", "_self")
    }

    return (
        <div className="bg-gray-800 p-7">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className="text-white text-xl font-bold">
                    CommuniLink
                </NavLink>
                <div className="flex space-x-4 items-center px-4">
                    <NavLink to="/history" className="text-white">
                        Communication History
                    </NavLink>

                    {Object?.keys(user)?.length > 0 ? (
                        <>
                            <NavLink to="/compose" className="text-white">
                                Compose Email
                            </NavLink>
                            <NavLink to="/dashboard" className="text-white">
                                Dashboard
                            </NavLink>

                            <NavLink onClick={logout} className="text-white">
                                Logout
                            </NavLink>
                        </>
                    ) : (
                        <NavLink to="/login" className="text-white">
                            Login with Google
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nabar;
