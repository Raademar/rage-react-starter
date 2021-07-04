import * as types from "./types"

export function testThing(text: string): types.IAddAction {
	return { type: types.ADD, payload: text }
}
