import {FC, memo, useState} from "react";
import {useSelector } from "react-redux";
import { sadMomentsSelector} from "./selectors";

 
type SadTrackerProps = {};

const SadTracker:FC<SadTrackerProps> = (props) => {
  const sadMoments = useSelector(sadMomentsSelector)
  const [sad, setSad] = useState(false)
  return(
  <div className="bg-green-500 text-center text-xl "> 
    {  sadMoments.map((m) => (<div>
      <>
     sadness Intensity: {m.intensity},
        when: {m.when.toLocaleString("en-IN")},
      </>
    </div>))}   
  </div>  
  )
};
SadTracker.defaultProps = {};
export default memo(SadTracker);
