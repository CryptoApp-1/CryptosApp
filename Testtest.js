// // importing Redux
// const redux = require('redux')
// const creaStore = redux.createStore

// // Providing an action     -------------->   should be a function
// const BUY_CAKE = 'BUY_CAKE'

// function buy_cake() {
//     return {
//         type:BUY_CAKE
//     }
// }

// // provding a Globale state   -------------->  the state should be an object

// const intialeState = {
//     numOfCakes:10
// }

// // Creating REDUCER  to manage action and change the globale state (the StoreState)
// // a reducer is  -------------->  a function takes 2 params (oldstate, action)and retrun   the newState

// const reducer = (state = intialeState,action)=> {
//         switch (action.type) {
//             case BUY_CAKE : return {
//                 numOfCakes: state.numOfCakes -1
//             }
//             default: return state
//         }
// }

// // Creating store and his RESPOSIBILITIES                       Picture 2
// const store = creaStore(reducer)
// console.log('initial state',store.getState())
// const unsubscribe= store.subscribe(() => console.log('Updated state',store.getState()))
// store.dispatch(buy_cake())
// unsubscribe()



