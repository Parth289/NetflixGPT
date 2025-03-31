import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utiles/validate";
import { auth } from "../utiles/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useSelector } from "react-redux";
import lang from "../utiles/LanguageKey";

const Login = () => {
  const value = useSelector((store) => store.config?.lang);

  const [signUp, setSignUp] = useState(true);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const submitForm = () => {
    const message = validateForm(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setError(message);
    if (message) {
      return;
    }

    if (signUp) {
      //fire base SIGN UP
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "" + errorMessage);
        });
    } else {
      // fire base LOG IN
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // fire base Update profile
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "" + errorMessage);
        });
    }
  };

  const toggleSignin = () => {
    setSignUp(!signUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
      <img
        className="h-screen w-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
      />
      </div>
      <div className="w-full md:w-3/12 absolute p-12 bg-black my-[8rem] mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <form
          onSubmit={(e) => {
            //to prevent form submit automatically because button inside form will submit it
            e.preventDefault();
          }}
        >
          <h1 className="font-bold text-3xl py-4">
            {signUp ? lang[value].signUp : lang[value].login}
          </h1>
          {signUp && (
            <input
              ref={name}
              className="p-4 my-4 w-full bg-gray-700"
              type="text"
              placeholder= {lang[value].name}
            />
          )}
          <input
            ref={email}
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder= {lang[value].email}
          />
          <input
            ref={password}
            className="p-4 my-4 w-full bg-gray-700"
            type="password"
            placeholder={lang[value].password}
          />
          <p className="text-red-700">{error}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={submitForm}
          >
            {signUp ? lang[value].signUp : lang[value].login}
          </button>
          <p className="py-4">
            <button onClick={toggleSignin}>
              {signUp
                ? lang[value].alreadyRegistered + " " +lang[value].login
                :  lang[value].signUp}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
