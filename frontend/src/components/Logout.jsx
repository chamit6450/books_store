import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut().then(() => {
      alert("Logged Out Successfully!");
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <div className="bg-white shadow-lg sm:rounded-2xl sm:p-12">
        <div>
          <div>
            <h1 className="text-1xl font-semibold">
              Are you sure you want to logout?
            </h1>
            <div className="flex flex-row justify-center items-center gap-20">     
      <button
        className="bg-blue-700 px-3 py-1 text-white rounded mt-5"
        onClick={handleLogout}
      >
        Yes
      </button>
      <button
        className="bg-blue-700 px-3 py-1 text-white rounded mt-5"
        onClick={handleLogout}
      >
        No
      </button>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
