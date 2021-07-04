import { applyMiddleware, createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import textReducer from "./ducks/test/reducer"
import charactersReducer from "./ducks/characters/reducer"

const rootReducer = combineReducers({
	text: textReducer,
	characters: charactersReducer,
})

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
