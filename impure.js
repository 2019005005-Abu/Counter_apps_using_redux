const state={
    value:5,
}

function impure(){
    state.value=6
}
impure()
console.log(state.value)