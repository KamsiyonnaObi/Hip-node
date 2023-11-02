"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

import Divider from "@/components/signup/Divider";
import FillIcon from "@/components/icons/FillIcon";
import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogIn = () => {
    console.log(formData);
  };
  return (
    <>
      <article className="mx-auto flex w-[327px] flex-col gap-[29px] sm:w-[442px] md:my-auto">
        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <h1 className="h3-semibold text-secondary2 dark:text-background2">
              Email
            </h1>
            <Input
              name="email"
              type="email"
              divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 dark:bg-dark2"
              className="bg-transparent w-full md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              onChange={handleChange}
              value={formData.email}
              placeholder="hello@gmail.com"
            />
            <h1 className="h3-semibold text-secondary2 dark:text-background2">
              Password
            </h1>
            <Input
              name="password"
              type="password"
              divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 dark:bg-dark2"
              className="bg-transparent w-full md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              onChange={handleChange}
              value={formData.password}
              placeholder="uikit.to074#"
            />
          </div>
          <div>
            <Button
              onClick={handleLogIn}
              disabled={!formData.email || !formData.password}
              className="px-10 py-2.5"
            >
              Log In
            </Button>
          </div>
          <p className="body-regular text-secondary2 dark:text-background2">
            Don&apos;t have an account yet?{" "}
            <Link href={"/sign-up"}>
              <span className="font-semibold text-red80">
                Join the community!
              </span>
            </Link>
          </p>
        </div>
        <div className="w-full">
          <Divider />
        </div>
        <div className="flex w-full flex-col gap-5">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            full
            color="gray"
            className="display-semibold items-center justify-center py-3 md:bg-secondary6"
          >
            <FillIcon.Google className="fill-secondary2 dark:fill-background2" />

            <p>Sign Up With Google</p>
          </Button>
          <Button
            onClick={() => signIn("facebook", { callbackUrl: "/" })}
            full
            color="gray"
            className="display-semibold items-center justify-center py-3 md:bg-secondary6"
          >
            <FillIcon.Facebook className="fill-secondary2 dark:fill-background2" />

            <p>Sign Up With Facebook</p>
          </Button>
        </div>
      </article>
    </>
  );
};

export default SignIn;
