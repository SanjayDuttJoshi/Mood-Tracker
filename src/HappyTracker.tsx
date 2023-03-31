import {FC, memo, useState} from "react";
import {useSelector} from "react-redux"
import { happyMomentsSelector} from "./selectors";

type HappyTrackerProps = {};

const HappyTracker:FC<HappyTrackerProps> =(props) =>{
  
  const happyMoments = useSelector(happyMomentsSelector)

 
  return(
    <div className="bg-orange-300 mb-2 text-xl text-center ">
      { happyMoments.map((m,i) => (
    <div key={i}>
      <>
     happiness intensity: {m.intensity},
        when:{m.when.toLocaleString("en-IN")},
      </>
    </div>)) }
    </div>)
};

HappyTracker.defaultProps = {}

export default memo(HappyTracker);