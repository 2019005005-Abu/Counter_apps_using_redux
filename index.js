let counter=document.getElementById('counter')
let INCREMENTT=document.getElementById('incre');
let DECREMENTT=document.getElementById('decre')

// create initial-state
const initialState={
    value:0,
}
const INCREMENT='increment';
const DECREMENT='decrement';
//action creator
const increment=(value)=>{
return{
    
        type:INCREMENT,
        payload:value,
     
}
}
const decrement=( value)=>{
    return{
        type:DECREMENT,
        payload:value,
    }
}
// create reducer
 function counterReducer(state=initialState,action){
   if(action.type===INCREMENT){
    return{
        ...state,
        value:state.value+action.payload,
    }
   }else if(action.type===DECREMENT){
     return{
        ...state,
        value:state.value-action.payload
     }
     
    }
    else{
        return{
            ...state
        }
    }
 }

 //create store
 const store=Redux.createStore(counterReducer);

 const render=()=>{
    const state=store.getState();
    counter.innerText=state.value.toString()
 }
 render()
 store.subscribe(render)

 //button click listeners

INCREMENTT.addEventListener('click',()=>{
 console.log("Data is incremeting")
 store.dispatch(increment(5));
})

DECREMENTT.addEventListener('click',()=>{
    console.log("Data is Decrement");
    store.dispatch(decrement(3))
})