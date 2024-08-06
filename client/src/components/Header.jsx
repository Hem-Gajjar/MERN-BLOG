import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  TextInput,
  Flowbite,
  DarkThemeToggle,
} from "flowbite-react";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice";
const handleSignOut = async () => {
  try {
    const res = await fetch("/api/user/signout", {
      method: "POST",
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.message);
    } else {
      dispatch(signOutSuccess());
    }
  } catch (error) {
    console.log(error.message);
  }
};
const Header = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <Flowbite>
        <Navbar className=" border-b-4 dark:bg-gray-900">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-tr from-purple-950 via-sky-800 to-blue-600 rounded-lg text-white">
              Tech Tonic
            </span>{" "}
            BLOG
          </Link>
          <form>
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              className="hidden lg:inline"
            />
          </form>
          <Button className="w-12 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch />
          </Button>
          <div className="flex gap-2 md:order-2">
            <DarkThemeToggle className="mr-5 border-2 dark:border-gray-500" />

            {currentUser ? (
              <Dropdown
                className="dropdown_style"
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    className="avatar-design"
                    alt="user"
                    img={currentUser.profilePicture}
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm font-medium ">
                    Username: @{currentUser.username}
                  </span>
                  <span className="block text-sm font-medium truncate">
                    Email: {currentUser.email}
                  </span>
                </Dropdown.Header>
                <Link to={"/dashboard?tab=profile"}>
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/sign-in">
                <Button className="sign-button border-2 ">Sign In</Button>
              </Link>
            )}

            <NavbarToggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link active={path == "/"} as={"div"}>
              <Link to="/" className="text-base">
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path == "/about"} as={"div"}>
              <Link to="/about" className="text-base">
                About
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path == "/projects"} as={"div"}>
              <Link to="/projects" className="text-base">
                Projects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </Flowbite>
    </div>
  );
};

export default Header;
