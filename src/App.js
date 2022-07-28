import { useState } from 'react';
import './App.css';
import List from './components/TodoList/Todolist';
import ListItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: 'Code yozish',
			isComplated: false,
		},

		{
			id: 2,
			text: "Kitob o'qish",
			isComplated: false,
		},

		{
			id: 3,
			text: 'Uxlash',
			isComplated: true,
		},
	]);

	function addTodo(text) {
		setTodos(
			todos.concat({ text, id: todos.length + 1, isComplated: false }),
		);
		console.log(todos);
	}

	// function removeTodo(id) {
	// 	setTodos(todos.filter(todos.forEach((el) => el.id != id)));
	// }

	return (
		<div className='App'>
			<AddTodo onCreate={addTodo} />

			<List>
				{todos.map((e) => (
					<ListItem
						key={e.id}
						text={e.text}
						isComplated={e.isComplated}
					/>
				))}
			</List>
		</div>
	);
}

export default App;
