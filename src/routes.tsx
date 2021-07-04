import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import { LoginScreen, CharacterSelection } from "./pages"

const HUD: React.FC = () => {
	return <h1>HUD!</h1>
}

const Routes = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" exact component={HUD} />
				<Route path="/login" component={LoginScreen} />
				<Route path="/characterselection" component={CharacterSelection} />
			</Switch>
		</HashRouter>
	)
}

export default Routes
