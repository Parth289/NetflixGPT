export const AVATAR_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
    //to keep this secure we have to keep this TMDB API key in .env file which will prevent to show on browser
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjM1MDQ1OTEyNDdkNjdlZTRhODJlMmI5Nzk3MzUyYSIsIm5iZiI6MTc0Mjk5Mzg0OC40Mywic3ViIjoiNjdlM2Y5Yjg3YjczMTNiNWFlZjBiMjc0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HkvjIwFpCNsC4ek02DTGyiLHVuR2-QgwLW563qWEgT4",
  },
};

export const LANGU_OPTIONS = [
  { identifier: "en", language: "English" },
  { identifier: "hindi", language: "Hindi" },
  { identifier: "spanish", language: "Spanish" },
  { identifier: "jap", language: "Japanese" },
];

//to keep this secure we have to keep this API key in .env file which will prevent to show on browser
export const GEMINI_KEY = "";
