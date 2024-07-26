import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { useSelector } from "react-redux";
import { HiChartPie, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const currentUser = useSelector((state) => state.user);
  return (
    <Sidebar className="w-full md:w-56 border-r-4 dark:border-gray-700 ">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {currentUser && (
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item
                active={tab === "dash"}
                icon={HiChartPie}
                as="div"
                className="my-2"
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
              label="User"
            >
              Profile
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
