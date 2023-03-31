import {moment} from "../store";
import {AnyAction} from "redux";
import {SAD_BUTTON_CLICKED,CLEAR_BUTTON_CLICKED} from "../action";

export type SadState = {
  sadMoments: moment[];
};
export const initialSadState:SadState = {
  sadMoments:[]
};
function sadnessReducer(currentSadState:SadState, action:AnyAction){
  switch(action.type){
  case SAD_BUTTON_CLICKED:
    return {...currentSadState, sadMoments:[...currentSadState.sadMoments, {intensity: action.payload.count, when:action.payload.when}]
}
    case CLEAR_BUTTON_CLICKED:
      console.log("sad reducer caleed")
      return {
        ...currentSadState, sadMoments:[]
      }
  default: return currentSadState;   
};
};

export default sadnessReducer;
