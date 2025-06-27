"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import { Card } from "@/components/ui/card";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Importing icons
import { useGetUserQuery, useSignInMutation, useSignUpMutation } from "@/lib/service/authApi";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/slice/authSlice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };
  const [signIn, { isLoading: isSigningIn }] = useSignInMutation();
  const [signUp, { isLoading: isSigningUp }] = useSignUpMutation();
  // Remove the incorrect destructuring and use the refetch method from the hook
  const { refetch: getUser } = useGetUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      toast.error("Email and password are required.");
      return;
    }

    try {
      if (isLogin) {
        await signIn({ email, password }).unwrap();
        const { data: user } = await getUser();
        if (user) {
          dispatch(setUser({ user }));
          toast.success("Login successful");
          navigate("/");
        }
      } else {
        const name = formData.get("name");
        if (typeof name !== "string") {
          toast.error("Name is required for signup.");
          return;
        }

        const response = await signUp({ name, email, password }).unwrap();
        toast.success("Signup successful");
        console.log(response);
        navigate("/auth?mode=signin");
        

      }
    } catch (error: unknown) {
      let errorMessage = "An error occurred";
      if (error && typeof error === 'object' && 'data' in error) {
        const errorData = (error as { data?: { message?: string } }).data;
        if (errorData?.message) {
          errorMessage = errorData.message;
        }
      }
      toast.error(errorMessage);
    }
  }; return (
    <div className="flex justify-center items-center min-h-screen ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {isLogin ? (
        <Card className="p-6  min-w-md bg-transparent">
          <div className="flex flex-col items-center text-white">
            <img src={Logo} alt="Logo" className="w-20 h-20 mb-4 " />
            <p className="text-base  mb-6 text-start w-full mt-5 ">
              Login To Continu
            </p>            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm mb-2 text-start"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm mb-2 text-start"
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full"
                  required
                />
              </div>
              <Button
                variant={"default"}
                type="submit"
                className="w-full bg-fuchsia-500"
                disabled={isSigningIn}
              >
                {isSigningIn ? "Logging in..." : "Login"}
              </Button>
            </form>
            <div className="flex items-center justify-center mt-6"></div>
            <div>
              <p className="text-center text-sm mt-4">
                Forget your password? <a href="#" className="text-blue-500"></a>
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <Button
                variant={"ghost"}
                className="flex items-center gap-2  text-white px-4 py-2 rounded border border-white"
              >
                <FaGoogle /> Google
              </Button>
              <Button
                variant={"ghost"}
                className="flex items-center gap-2  text-white px-4 py-2 rounded border"
              >
                <FaFacebook /> Facebook
              </Button>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-white flex items-center gap-2 justify-center">
              Don't have an account?{" "}
              <p onClick={handleToggle} className="text-blue-500 cursor-pointer">
                Sign up
              </p>
            </p>
          </div>
        </Card>
      ) : (
        <Card className="p-6  min-w-md bg-transparent">
          <div className="flex flex-col items-center text-white">
            <img src={Logo} alt="Logo" className="w-20 h-20 mb-4 " />
            <p className="text-base  mb-6 text-start w-full mt-5 ">
              Signup To Continu
            </p>            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm mb-2 text-start" htmlFor="name">
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm mb-2 text-start"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm mb-2 text-start"
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full"
                  required
                />
              </div>
              <Button
                variant={"default"}
                type="submit"
                className="w-full bg-fuchsia-500"
                disabled={isSigningUp}
              >
                {isSigningUp ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
            <div className="flex items-center justify-center mt-6"></div>
            <div></div>
            <div className="flex gap-4 mt-4">
              <Button
                variant={"ghost"}
                className="flex items-center gap-2  text-white px-4 py-2 rounded border border-white"
              >
                <FaGoogle /> Google
              </Button>
              <Button
                variant={"ghost"}
                className="flex items-center gap-2  text-white px-4 py-2 rounded border"
              >
                <FaFacebook /> Facebook
              </Button>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-white flex items-center gap-2 justify-center">
              Have an account?{" "}
              <p onClick={handleToggle} className="text-blue-500 cursor-pointer">
                Sign In
              </p>
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Auth;


