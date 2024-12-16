import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

function App() {
	const [tasks, setTasks] = useState<TaskType[]>([
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
		// { id: 5, title: 'Typescript', isDone: false },
		{ id: 6, title: 'RTK query', isDone: false },
	])

	const removeTask = (taskId: number) => {
		const filteredTasks = tasks.filter(task => {
			return task.id !== taskId
		})
		setTasks(filteredTasks)

	}
	const [filter, setFilter] = useState('all')

	let tasksForTodolist = tasks
	if (filter === 'active') {
		tasksForTodolist = tasks.filter(task => task.isDone === false)
	}

	if (filter === 'completed') {
		tasksForTodolist = tasks.filter(task => task.isDone === true)
	}

	return (
		<div className="App">
			<Todolist title={"What tot learn"} tasks={tasksForTodolist} removeTask={removeTask} />
		</div>
	)



}

export default App;
