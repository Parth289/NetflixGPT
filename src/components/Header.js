import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utiles/UserSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utiles/Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { AVATAR_URL, LANGU_OPTIONS } from "../utiles/Constants";
import { changeLanguage } from "../utiles/ConfigSlice";
import { FiMenu, FiX } from "react-icons/fi";
import langs from "../utiles/LanguageKey";

const Header = ({ setShowSearchGpt, value }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const values = useSelector((store) => store.config?.lang);


  useEffect(() => {
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

  const handleLanguChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth).catch((error) => {});
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img className="w-[14rem] mx-auto md:mx-0" src={AVATAR_URL} alt="logo" />
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center md:space-x-6 bg-black md:bg-transparent p-4 md:p-0 absolute md:relative top-full left-0 w-full md:w-auto`}
      >
        <select
          className="h-12 px-6 my-2 md:my-0 rounded-2xl bg-gray-500 text-white p-1 bg-opacity-50 cursor-pointer appearance-none"
          onChange={handleLanguChange}
        >
          {LANGU_OPTIONS.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.language}
            </option>
          ))}
        </select>

        {user && (
          <>
            <button
              className="h-12 my-2 md:my-0 bg-gradient-to-r from-blue-600 to-purple-800 text-white px-6 rounded-xl shadow-xl hover:from-blue-700 hover:to-purple-900 transition-all"
              onClick={() => setShowSearchGpt((prev) => !prev)}
            >
              {!value ? langs[values].searchGPT : langs[values].homePage}
            </button>

            <img
              className="w-10 l-10 m-5 hidden md:block"
              alt="avatar"
              src="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
            />

            <button className="text-white font-bold" onClick={handleSignOut}>
            {langs[values].signOut}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
