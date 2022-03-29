import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  // const online = navigator.onLine;
  const [isOnline, setIsOnline] = useState(true);
  // console.log(isOnline);
  // addEventListener version
  window.addEventListener("offline", () => {
    setIsOnline(false);
  });
  window.addEventListener("online", () => {
    setIsOnline(true);
  });

  return (
    <div className="bg-slate-700 px-2 flex justify-between">
      <div>
        <span
          className={`${
            isOnline ? "bg-green-500" : "bg-red-500"
          } w-2 h-2 rounded-full inline-block animate-pulse `}
        ></span>
        <span
          className={`${
            isOnline ? "text-green-600" : "text-red-500"
          } ml-1  tracking-wide	`}
        >
          {isOnline ? "online" : "offline"}
        </span>
      </div>

      <div className="flex justify-end text-zinc-100  text-base divide-x">
        <Link to="signup">
          <div className="px-2">
            <h2 className="hover:font-semibold cursor-pointer">Signup</h2>
          </div>
        </Link>
        <Link to="login">
          <div className="px-2">
            <h2 className="hover:font-semibold cursor-pointer">Login</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Register);
