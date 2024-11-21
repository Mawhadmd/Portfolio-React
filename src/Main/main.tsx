import { createContext, StrictMode, useContext, useRef } from "react";
import { createRoot } from "react-dom/client";
import React from 'react'

import App from "./App.js";

export const refsprovider = createContext({});
function Context(){
const techstackref = useRef<any>()
const aboutref = useRef<any>()
const skillsref = useRef<any>()
const expref = useRef<any>()
const githubref = useRef<any>()
return(
  <refsprovider.Provider value={{techstackref,aboutref,skillsref,expref,githubref}}  >
    <StrictMode>
    <App />
  </StrictMode>
  </refsprovider.Provider>
)
}


createRoot(document.getElementById("root")!).render(
 <Context></Context>
);
