import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
	// Перемещаем массив в tasksForTodolist
	let tasksForTodolist = [
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
		{ id: 6, title: 'RTK query', isDone: false },
	];

	const [tasks, setTasks] = useState<TaskType[]>(tasksForTodolist);

	const removeTask = (taskId: number) => {
		const filteredTasks = tasks.filter(task => {
			return task.id !== taskId
		})
		setTasks(filteredTasks)

	}
	const [filter, setFilter] = useState<FilterValuesType>('all')

	const changeFilter = (filter: FilterValuesType) => {
		setFilter(filter)
	}


	if (filter === 'active') {
		tasksForTodolist = tasks.filter(task => !task.isDone)
	}

	if (filter === 'completed') {
		tasksForTodolist = tasks.filter(task => task.isDone)
	}

	return (
		<div className="App">
			<Todolist title={"What tot learn"} tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter} />
		</div>
	)



}

export default App;
