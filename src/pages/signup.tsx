import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = {
      email,
      password,
    };
    console.log(result);
  };

  const handEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target?.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target?.value);
  };
  return (
    <section className="mt-56 ">
      <h1 className="pb-3 text-center text-2xl font-bold">Auth in Admin</h1>

      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="rounded-md border-2 border-orange-400 p-8">
          <div className="pb-4">
            <label className="block text-sm font-medium">Email</label>
            <div className="flex">
              <Input
                onChange={handEmailChange}
                type="email"
                name="email"
                id="email"
                className="flex h-10 w-full flex-1 rounded-r-md border bg-orange-200  sm:text-sm lg:w-60"
              />
            </div>
          </div>
          <div className="pb-2">
            <label className="block text-sm font-medium">Password</label>
            <div className="flex">
              <Input
                onChange={handlePasswordChange}
                type="password"
                name="password"
                id="password"
                className="flex h-10 w-full flex-1 rounded-r-md border bg-orange-200  sm:text-sm lg:w-60"
              />
            </div>
          </div>

          <button
            className="mt-4 w-full rounded-md bg-orange-400 px-6 py-2 font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
