import React from "react";
export class Info extends React.Component{
	
	/* The main component of the page, including accurate time */
	render(){
		return (
			<div>
				<img src="https://i.imgur.com/qkR7Kw9.png" alt="Logo"></img>
				<h1>Welcome</h1>
				<p>flags.com is your one-stop shop for adding and storing information about all the flags of the world</p>
				<h4>{new Date().toLocaleTimeString()} </h4>
			</div>
        )
	}
}