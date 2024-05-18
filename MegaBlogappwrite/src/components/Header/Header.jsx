import React from "react";
import { Container, Logo, LogOutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      acitve: ture,
    },
    {
      name: "Login",
      slug: "/login",
      acitve: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      acitve: !authStatus,
    },
    {
      name: "All Post",
      slug: "/all-post",
      acitve: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      acitve: authStatus,
    },
  ];
  return <div>Header</div>;
};
export default Header;
