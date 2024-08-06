import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { useSelector } from "react-redux";
import {
  HiArrowSmRight,
  HiChartPie,
  HiDocumentText,
  HiUser,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { signOutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
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
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Sidebar className="w-full md:w-56 border-r-4 dark:border-gray-700 ">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col ">
          {currentUser && currentUser.isAdmin && (
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item
                active={tab === "dash"}
                icon={HiChartPie}
                as="div"
                className="my-1"
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              as="div"
              label={currentUser.isAdmin ? "Admin" : "User"}
              className="my-1"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === "posts"}
                icon={HiDocumentText}
                as="div"
                className="my-1"
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer my-1"
            onClick={handleSignOut}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
