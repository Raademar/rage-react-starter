import * as types from "./types"

interface ITextState {
	texts: string[]
}

const logInitialState: ITextState = {
	texts: [],
}

export default function reducer(
	state = logInitialState,
	action: types.IAddAction
): ITextState {
	switch (action.type) {
		case types.ADD:
			return {
				...state,
				texts: [...state.texts, action.payload],
			}
		default:
			return state
	}
}
