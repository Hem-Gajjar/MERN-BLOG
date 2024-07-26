import { TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <div>
      <div className="max-w-lg mx-auto w-full">
        <form className="flex flex-col gap-2">
          <h1 className="text-center text-3xl dark:text-white ">Profile</h1>
          <div className="w-32 h-32 self-center">
            <img
              className="rounded-full w-full h-full border-8 border-[lightgray] object-cover"
              src={currentUser.profilePicture}
            />
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <TextInput
              type="text"
              id="username"
              placeholder="Username"
              defaultValue={currentUser.username}
            />
            <TextInput
              type="text"
              id="email"
              placeholder="Email"
              defaultValue={currentUser.email}
            />
            <TextInput
              type="text"
              id="password"
              placeholder="Change you password"
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
        <div className="text-red-500 flex justify-between mt-3">
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
