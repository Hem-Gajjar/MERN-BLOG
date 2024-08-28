import { Button, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";

const PostPage = () => {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  // console.log(post);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          // console.log(data);
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <main className="en dark:bg-gray-800 dark:text-white ">
      <div className="p-3 flex flex-col  mx-auto min-h-screen dark:bg-gray-800 dark:text-white max-w-6xl    ">
        <h1 className="mx-auto text-4xl dark:text-gray-300 ">
          {" "}
          {post && post.title}
        </h1>
        <Link
          to={`/search?category=${post.category}`}
          className="self-center mt-4"
        >
          <Button color="gray" pill size="xs">
            {post && post.category}
          </Button>
        </Link>
        <img
          src={post && post.image}
          alt={post && post.title}
          className="mt-5 p-3 max-h-[600px] w-full object-cover"
        />
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full">
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
          <span>
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div
          className="p-3 text-lg text-justify post-content"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
        <div>
          <CallToAction />
        </div>

        <CommentSection postId={post._id} />
      </div>
    </main>
  );
};

export default PostPage;
