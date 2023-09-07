import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:{
    "_id": "64f74f5f56e14b8202c6040c",
    "username": "jon",
    "email": "jon@gmail.com",
    "password": "$2b$10$3W47VeGCowLWZ4R3y32WROJt3eGTo6x/rzu.XBuJOmMT6CEHW3O36",
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "followings": [
        "64f73fd2a35b54e776bf31c2"
    ],
  }
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};