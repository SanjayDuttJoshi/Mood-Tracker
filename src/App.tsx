import React from "react";
import HappyTracker from "./HappyTracker";
import SadTracker from "./SadTracker";
import HappyIncrementor from "./HappyIncrementor";
import SadIncrementor from "./SadIncrementor";
import ClearAll from "./ClearAll";


export default function App() {
  return (
    <div className="text-indigo-700 bg-black h-screen">
     <u className="text-yellow-300"> <h1 className="text-yellow-300  pt-4 text-4xl mb-4 bold text-center ">MOOD TRACKER</h1></u>
      
      <HappyIncrementor />
      <SadIncrementor />
     <ClearAll/>
      <HappyTracker />
      <SadTracker />
     
    </div>
  )
}