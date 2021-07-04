export const UPDATE_CHARACTER_SELECTION = "UpdateCharacterSelection"
export interface IUpdateCharacterSelection {
	type: typeof UPDATE_CHARACTER_SELECTION
	payload: Record<string, unknown>[]
}
