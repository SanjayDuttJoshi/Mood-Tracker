import { state } from "./store";

export function happyMomentsSelector(state:state) {
  return state.happy.happyMoments;
}

export function sadMomentsSelector(state:state) {
  
  return state.sad.sadMoments;
}