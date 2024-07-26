import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";
const SignIn = () => {
  const dispatch = useDispatch();

  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (response.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  console.log(formData);
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-800">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10  ">
        {/* left */}
        <div className="flex-1">
          {" "}
          <Link to="/" className="text-5xl font-bold dark:text-white ">
            <span className="px-2 py-1 bg-gradient-to-tr from-purple-950 via-sky-800 to-blue-600 rounded-lg text-white">
              SIGN
            </span>
            IN
          </Link>
          <p className="text-sm mt-5 dark:text-white">
            This is a demo project. You can sign-in using Google Account.
          </p>
        </div>
        {/* right */}
        <div className="flex-1 ">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              className="sign-button"
              // gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
              pill
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>

          <div className="flex gap-2 text-sm mt-5 dark:text-white">
            <span>Don't have an account?</span>
            <Link to="/sign-up" className="text-blue-600">
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
