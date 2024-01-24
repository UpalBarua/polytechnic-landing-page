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
    <section className=" mt-56 ">
      <h1 className="text-center text-2xl font-bold pb-3">Auth in Admin</h1>

      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="border-2 p-8 border-orange-400 rounded-md">
          <div className="pb-4">
            <label className="block text-sm font-medium">Email</label>
            <div className="flex">
              <Input
                onChange={handEmailChange}
                type="email"
                name="email"
                id="email"
                className=" w-full lg:w-60 h-10 flex bg-orange-200 flex-1 border sm:text-sm rounded-r-md   "
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
                className=" w-full lg:w-60 h-10 flex bg-orange-200 flex-1 border sm:text-sm rounded-r-md   "
              />
            </div>
          </div>

          <button
            className="w-full font-bold bg-orange-400 px-6 py-2 mt-4 rounded-md"
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
