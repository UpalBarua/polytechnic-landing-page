import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <h1 className="pb-3 text-2xl font-bold text-center">Auth in Admin</h1>

      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="p-8 rounded-md border-2 border-orange-400">
          <div className="pb-4">
            <label className="block text-sm font-medium">Email</label>
            <div className="flex">
              <Input
                onChange={handEmailChange}
                type="email"
                name="email"
                id="email"
                className="flex flex-1 w-full h-10 bg-orange-200 rounded-r-md border  lg:w-60 sm:text-sm"
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
                className="flex flex-1 w-full h-10 bg-orange-200 rounded-r-md border  lg:w-60 sm:text-sm"
              />
            </div>
          </div>

          <button
            className="py-2 px-6 mt-4 w-full font-bold bg-orange-400 rounded-md"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
