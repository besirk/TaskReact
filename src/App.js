import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 1:30pm',
    reminder: true,
},
{
    id: 2,
    text: 'Dentist Appointment',
    day: 'June 5th at 7:30pm',
    reminder: true,
},
{
    id: 3,
    text: 'Football Match Appointment',
    day: 'Jan 5th at 1:20pm',
    reminder: false,
},]);

//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task}
  setTasks ([...tasks, newTask  ])
}
//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id == id ? { ...task, reminder: !task.reminder} : task))
};

  return (
    <div className="container">
     <Header onAdd ={ () => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete ={deleteTask} onToggle = {toggleReminder} /> : 'No Task Available'}
    </div>
  );
}

export default App;
