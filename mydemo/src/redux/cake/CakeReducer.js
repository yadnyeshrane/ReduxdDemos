import {BUY_CAKE} from './CakeTypes'
const initalState={
    numofCakes:10,
}

const CakeReducer=(state=initalState,action)=>
{
   switch(action.type)
   {
      case BUY_CAKE:
          return{
              ...state,
              numofCakes:state.numofCakes-action.payload
          }

        default :return state  
   }
}