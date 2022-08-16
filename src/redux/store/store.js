import { applyMiddleware, combineReducers, createStore } from "redux";
import { signReducers } from "../reducers/signReducers";
import thunk from "redux-thunk";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers(
    {
        valoresUsuario: signReducers,
    }
)

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
