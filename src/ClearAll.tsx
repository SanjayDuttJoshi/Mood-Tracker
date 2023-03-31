import {FC, memo, } from "react";
import {useDispatch } from "react-redux"
import {clearButtonClicked} from "./action";

type ClearAllProps = {};

const ClearAll: FC<ClearAllProps> = (props) =>{
   const dispatch = useDispatch();
  
function ClearCalled(){
    console.log("clear button increment called")

  dispatch(clearButtonClicked())
  
} 
  return (
   <div className="  my-8  text-center">
     
    <button onClick={ClearCalled} className="bg-yellow-500 px-4 py-1 text-xl  rounded-md  ">Clear trackers</button>
    
   </div>
    
  );
};

ClearAll.defaultProps = {};
export default memo(ClearAll);