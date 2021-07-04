import React, { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../store/hooks"

export const CharacterSelection: React.FC = () => {
	const [inputState, setInputState] = useState("")
	const texts = useAppSelector(state => state.text.texts)
	const characters = useAppSelector(state => state.characters.characters)
	const dispatch = useAppDispatch()

	const handleChange = (input: React.ChangeEvent<HTMLInputElement>) => {
		setInputState(input.target.value)
	}

	const handleSubmit = () => {
		dispatch({ type: "ADD", payload: inputState })
		setInputState("")
	}

	return (
		<>
			<div className="container pt-4">
				<h1>TEXTS!</h1>
				{texts.map((text, index) => (
					<p key={index}>{text}</p>
				))}
				<input type="text" onChange={handleChange} value={inputState} />
				<button onClick={handleSubmit}>Submit new text</button>
			</div>

			<div className="container pt-4">
				<h1>CHARACTERS!</h1>
				{characters.map((character, index) => (
					<p key={index}>{JSON.stringify(character)}</p>
				))}
			</div>
		</>
	)
}
