import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utiles/UserSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utiles/Firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AVATAR_URL } from "../utiles/Constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    //firebase api
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const handleSignOut = () => {
    //firebase api
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <div>
        <img
          className="w-[14rem] mx-auto md:mx-0"
          src={AVATAR_URL}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex p-2 justify-between">
          <img
            className="w-10 l-10 m-5"
            alt="logo"
            src="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
          />
          <button className="mr-2 text-white font-bold" onClick={handleSignOut}>
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
