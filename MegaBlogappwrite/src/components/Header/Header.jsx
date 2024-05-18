import React from "react";
import { Container, Logo, LogOutBtn } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link>
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.acitve ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogOutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
export default Header;
