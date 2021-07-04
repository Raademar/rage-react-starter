import * as types from "./types"

interface ICharacterState {
	characters: Record<string, unknown>[]
}

const logInitialState: ICharacterState = {
	characters: [],
}

export default function reducer(
	state = logInitialState,
	action: types.IUpdateCharacterSelection
): ICharacterState {
	switch (action.type) {
		case types.UPDATE_CHARACTER_SELECTION:
			return {
				...state,
				characters: action.payload,
			}
		default:
			return state
	}
}
