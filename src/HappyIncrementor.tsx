import {FC, memo, useState} from "react";
import {useDispatch } from "react-redux"
import {happyButtonClicked} from "./action";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = (props) =>{
  const [quantity, setQuantity] = useState(0);
 const dispatch = useDispatch();  
function increment(){
 if(quantity !== 0){
   dispatch(happyButtonClicked(quantity,new Date()));
  setQuantity(0)
 } 
} 
  return (
   <div className="py-6 text-center  ">
     <h3 className="text-2xl text-indigo-300 mb-2" >Are you Happy</h3>
     <input 
       className="pl-2 py-1 mr-1"
       placeholder="enter number" 
       type="number" 
       value={quantity} 
       onChange={(event)=> setQuantity(+event.target.value)}/>   
    <button onClick={increment} className="py-1 ml-1 px-2 rounded-md text-xl text-black bg-green-700">yes</button>
    
   </div>    
  );
};

HappyIncrementor.defaultProps = {};
export default memo(HappyIncrementor);