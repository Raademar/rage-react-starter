import * as types from "./types"

export function updateCharacterSelection(
	characters: Record<string, unknown>[]
): types.IUpdateCharacterSelection {
	return {
		type: types.UPDATE_CHARACTER_SELECTION,
		payload: characters,
	}
}
