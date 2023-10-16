"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

import Divider from "@/components/login/Divider";
import FillIcon from "@/components/icons/FillIcon";
import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (formData.username === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formData]);

  return (
    <>
      <article className="mx-auto flex w-[327px] flex-col gap-[29px] sm:w-[442px] md:my-auto">
        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <h1 className="h3-semibold text-secondary2 dark:text-background2">
              Choose a username
            </h1>
            <Input
              name="username"
              divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 dark:bg-dark2"
              className="w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              onChange={handleChange}
              value={formData.username}
              placeholder="e.g Hipnode123"
            />
          </div>
          <div>
            <Button disabled={disabled} className="px-10 py-2.5">
              Next
            </Button>
          </div>
          <p className="body-regular text-secondary2 dark:text-background2">
            Already have an account?{" "}
            <Link href={"/"}>
              <span className="font-semibold text-red80">Sign in</span>
            </Link>
          </p>
        </div>
        <div className="w-full">
          <Divider />
        </div>
        <div className="flex w-full flex-col gap-5">
          <Button
            onclock={() => signIn("google", { callbackUrl: "/" })}
            full
            color="gray"
            className="items-center justify-center py-3 md:bg-secondary6"
          >
            <FillIcon.Google className="fill-secondary2 dark:fill-background2" />

            <p>Sign Up With Google</p>
          </Button>
          <Button
            onclock={() => signIn("facebook", { callbackUrl: "/" })}
            full
            color="gray"
            className="items-center justify-center py-3 md:bg-secondary6"
          >
            <FillIcon.Facebook className="fill-secondary2 dark:fill-background2" />

            <p>Sign Up With Facebook</p>
          </Button>
        </div>
      </article>{" "}
    </>
  );
};

export default Login;
