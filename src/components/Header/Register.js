import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="bg-slate-700 px-2">
      <div className="flex justify-end text-zinc-100  text-base divide-x">
        <Link to='signup'>
          <div className="px-2">
            <h2 className="hover:font-semibold cursor-pointer">Signup</h2>
          </div>
        </Link>
        <Link to='login'>
          <div className="px-2">
            <h2 className="hover:font-semibold cursor-pointer">Login</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Register;
