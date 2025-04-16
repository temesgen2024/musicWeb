"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import { Card } from "@/components/ui/card";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Importing icons
import { LogIn } from "lucide-react";

type Props = {};

const Auth = (props: Props) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      {isLogin ? (
        <Card className="p-6  min-w-md bg-transparent">
          <div className="flex flex-col items-center text-white">
            <img src={Logo} alt="Logo" className="w-20 h-20 mb-4 " />
            <p className="text-base  mb-6 text-start w-full mt-5 ">
              Login To Continu
            </p>
            <form className="w-full">
              <div className="mb-4">
                <label
                  className="block text-sm mb-2 text-start"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input type="email" placeholder="Email" className="w-full" />
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
                  placeholder="Password"
                  className="w-full"
                />
              </div>
              <Button
                variant={"default"}
                type="submit"
                className="w-full bg-fuchsia-500 "
              >
                Login
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
            </p>
            <form className="w-full">
              <div className="mb-4">
                <label className="block text-sm mb-2 text-start" htmlFor="name">
                  Name
                </label>
                <Input type="name" placeholder="Name" className="w-full" />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm mb-2 text-start"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input type="email" placeholder="Email" className="w-full" />
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
                  placeholder="Password"
                  className="w-full"
                />
              </div>
              <Button
                variant={"default"}
                type="submit"
                className="w-full bg-fuchsia-500 "
              >
                Login
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
