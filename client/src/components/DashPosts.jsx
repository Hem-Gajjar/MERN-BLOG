import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
const DashPosts = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  console.log(userPosts);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500 ">
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <></>
      ) : (
        <p>You have not created any posts yet</p>
      )}
      <Table className="border  mt-3 border-2  dark:border-gray-400 ">
        <Table.Head key="THead">
          <Table.HeadCell>Date Updated</Table.HeadCell>
          <Table.HeadCell>Post Image</Table.HeadCell>
          <Table.HeadCell>Post Title</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>
            {" "}
            <span>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {userPosts.map((post) => (
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                {new Date(post.updatedAt).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>
                <Link to={`/post/${post.slug}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-10 object-cover bg-gray-500"
                  />
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  to={`/post/${post.slug}`}
                  className="font-medium text-gray-900 dark:text-white"
                >
                  {post.title}
                </Link>
              </Table.Cell>
              <Table.Cell className="font-medium text-gray-900 dark:text-white">
                {post.category}
              </Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  class="text-gray-200 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:bg-gradient-to-br font-medium rounded-lg text-xs px-2 py-2 text-center me-2 mb-2 cursor-pointer "
                >
                  Delete
                </button>
              </Table.Cell>
              <Table.Cell>
                <Link
                  className="focus:outline-none"
                  to={`/update-post/${post._id}`}
                >
                  <button
                    type="button"
                    class="text-gray-200 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br  font-medium rounded-lg text-xs px-4 py-2 text-center me-2 mb-2 cursor-pointer "
                  >
                    Edit
                  </button>
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default DashPosts;
DashPosts;
