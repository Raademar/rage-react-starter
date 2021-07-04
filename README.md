# React, Redux, Typescript example repo.
### Example repository for using React with Redux as global state manager, written with Typescript as UI solution for the GTA:V framework [RAGE Multiplayer](https://rage.mp).
This example repository does not claim to be best practice.


---


## Sending data from the Client to the UI (CEF) 🖥️
```
this.browser = mp.browsers.new("package://cef/index.html#");
this.browser.execute( `window.store.dispatch({type: "ADD", payload: ${data}})`)
```
In order for the Redux store to be in the window scope we assign it like this in our root `index.tsx`
```
import store from "./store"
window["store"] = store
```

After this point we're on "normal" React roads again.

```
import { useAppSelector, useAppDispatch } from "../../store/hooks"
const texts = useAppSelector(state => state.text.texts)
const dispatch = useAppDispatch()

const handleSubmit = () => {
    dispatch({ type: "ADD", payload: "Cool input here" })
}

<div>
    {texts.map((text, index) => (
        <p key={index}>{text}</p>
    ))}
</div>
```



## Sending data from the UI to the Client and Server 💻
```
// React
const handleSubmit = () => {
    mp.trigger("CallServerEvent", "Login", JSON.stringify(loginInfo))
}
<form onSubmit={handleSubmit}>
...
</form>

// Client
mp.events.add({
    "CallServerEvent": (event: string, data: string) => {
        mp.events.callRemote(event, data);
    },
    ...
)}

// Server
mp.events.add({
    "Login": (player: PlayerMp, data: string) => {
        ... Handle login
    },
})
```

## Handling routing 🗺️

On the UI side we use React-Router with the `HashRouter`

```
import { HashRouter, Route, Switch } from "react-router-dom"
import { LoginScreen, CharacterSelection } from "./pages"

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
```

### The routing is controlled from the Server/Client side

```
this.browser = mp.browsers.new("package://cef/index.html#");
const path = `location.hash = "#${url}"`;
this.browser.execute(path);
```

## Building and bundling 🛠️
This example uses Tailwind for styling (Login page) and included are the minimum required setup to use Tailwind with React.

This is not needed and can be replaced with any other styling solution. Craco can also be removed if Tailwind is not used.

### Craco
The react-scripts for start, build and test are replaced by craco to allow for postcss handling.
```
"start": "craco start",
"build": "craco build",
"test": "craco test",
```

### Gulp
This example uses Gulp to bundle the built Javascript files to inline Javascript located in the `build/index.html`

Example on how I handle bundling and then moving the `build` folder to the right location.
```
// package.json in RAGE.mp server-files root
"gulp": "cd app/react-cef && npx gulp",
"move-cef": "cp -r app/react-cef/build client_packages/cef/",
```
