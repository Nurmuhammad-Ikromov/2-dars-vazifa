import '../TodoItem/TodoItem.css';

function TodoItem({ text, isComplated }) {
	


	return (
		<li className='todo-item'>
			{isComplated ? (
				<input defaultChecked={true} type='checkbox' />
			) : (
				<input type='checkbox' />
			)}
			<h3>{text}</h3>

			
			<button type='button'>Delete</button>
		</li>
	);
}

export default TodoItem;
