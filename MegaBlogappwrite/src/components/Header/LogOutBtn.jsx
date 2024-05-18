import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appWrite/config";
import { logout } from "../../Store/authSlice";

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div>
      <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
        LogOut
      </button>
    </div>
  );
};

export default LogOutBtn;
