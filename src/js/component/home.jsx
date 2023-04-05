import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container mt-5">
			<h1 className="text-center">Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter" && inputValue.trim() !== "") {
								setTodos([...todos, inputValue.trim()]);
								setInputValue("");
							}
						}}
						placeholder="What do you need to do?"
					/>
				</li>
				{todos.map((t, index) => (
					<li key={index}>{t}</li>
				))}
			</ul>
			<div>{todos.length} items</div>
		</div>
	);
};

export default Home;
