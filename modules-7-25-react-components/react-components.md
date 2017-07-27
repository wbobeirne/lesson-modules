autoscale: true

# [fit] React Components in Depth

### Lifecycle, Props & State, Common Patterns

---

## React Components

* We learned a little bit about components previously
* But there's a lot going on under the hood in `extends React.Component`
* Everything in React is a component, so they have a ton of options and patterns to follow to make anything you'd need
* We're going to look more closely at components to understand what's going on

---

## Component `props` - Overview

* Properties are values that components receive from its parent that determine how it should behave
* They can change the way it renders, provide some initial values to start out with, or have it function differently
* When a parent component changes what properties it sends along, our component updates to reflect those changes
* Properties **cannot be changed by the component**, so do not try to assign values to `this.props`

---

## Component `props` - How to Use

* Props are sent in JSX like attributes are set in HTML
* However, props are _not_ limited to strings
* By using the curly braces, we can send over anything, including arrays, objects, or functions

```
// App.js
class App extends React.Component {
	render() {
		const links = [{
			text: "Home",
			href: "/home",
		}, /* ... */];

		return (
			<div>
				<Nav links={links}/>
			</div>
		);
	}
}
```

---

# And with some other body copy

> The best way to predict the future is to invent it
-- Alan Kay
