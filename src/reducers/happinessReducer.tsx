import {moment} from "../store";
import {AnyAction} from "redux";
import {HAPPY_BUTTON_CLICKED,CLEAR_BUTTON_CLICKED} from "../action";

export type HappyState = {happyMoments:moment[] };

export const initialHappyState: HappyState= {
  happyMoments: []
};
function happinessReducer(currentHappyState:HappyState, action:AnyAction){
  
  switch(action.type){
  case HAPPY_BUTTON_CLICKED:
    return {...currentHappyState, happyMoments:[...currentHappyState.happyMoments, {intensity: action.payload.count, when: action.payload.when }]
    }
    case CLEAR_BUTTON_CLICKED:
    
      return {
        
        ...currentHappyState, happyMoments:[]
      }
  default: return currentHappyState
};
};
export default happinessReducer;
