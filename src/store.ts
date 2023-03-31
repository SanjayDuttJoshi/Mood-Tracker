import {AnyAction, createStore} from "redux";
import {HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED, CLEAR_BUTTON_CLICKED} from "./action";
import happinessReducer, {HappyState, initialHappyState} from "./reducers/happinessReducer";
import sadnessReducer, {SadState, initialSadState} from "./reducers/sadnessReducer"

 export type moment = {
  intensity: number;
  when: Date;
}

export type state={
  happy: HappyState,
  sad: SadState,
}
const initialState:state = {
  happy: initialHappyState,
  sad: initialSadState,
};


function reducer(currentState = initialState, action:AnyAction): state {
return {
  happy: happinessReducer(currentState.happy,action),
  sad:sadnessReducer(currentState.sad,action),
};
};


const store = createStore(reducer);

export default store;