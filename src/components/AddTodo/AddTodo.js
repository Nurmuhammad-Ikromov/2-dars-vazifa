import React, { useState} from 'react'
import '../AddTodo/AddTodo.css'

function AddTodo( {onCreate}) {
	const [value, setValue] = useState('');
    function submitHand(evt){ 
        evt.preventDefault(); 

        if ((value.trim())){
            onCreate(value)
            setValue("")
        }

		

    }
	return (
		<form className='todo-form' onSubmit={submitHand}>
			<input value={value} onChange={(evt) => setValue(evt.target.value)} type='text'  />
			<button type='submit'>Add</button>
		</form>
	);
}


export default AddTodo
