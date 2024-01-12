"use client";
import React, { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TailSpin } from "react-loader-spinner";

import Divider from "@/components/signup/Divider";
import FillIcon from "@/components/icons/FillIcon";
import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [failedLogin, setFailedLogin] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async () => {
    try {
      const response = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      if (response?.error) {
        setFailedLogin(true);
      } else {
        router.push("/");
        setFailedLogin(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleLogIn = () => startTransition(handleSignIn);

  return (
    <>
      <article className="mx-auto flex w-[327px] flex-col gap-[29px] sm:w-[442px] md:my-auto">
        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <h1 className="h3-semibold text-secondary2 dark:text-background2">
              Email
            </h1>
            {failedLogin && (
              <p className="text-red">Email or Password is invalid</p>
            )}
            <Input
              name="email"
              type="email"
              divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
              className="w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
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
              divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
              className="w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              onChange={handleChange}
              value={formData.password}
              placeholder="uikit.to074#"
            />
          </div>
          <div>
            <Button
              onClick={handleLogIn}
              disabled={!formData.email || !formData.password || isPending}
              className="flex h-[46px] w-[127px] items-center justify-center"
            >
              Log In
              {isPending && <TailSpin color="#f7f7f7" height={20} width={20} />}
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

            <p>Sign In With Google</p>
          </Button>
          <Button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            full
            color="gray"
            className="display-semibold items-center justify-center py-3 md:bg-secondary6"
          >
            <FillIcon.GitHub className="fill-secondary2 dark:fill-background2" />

            <p>Sign In With Github</p>
          </Button>
        </div>
      </article>
    </>
  );
};

export default SignIn;
