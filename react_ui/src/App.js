import React, { useState, useEffect, useCallback } from 'react';

import './App.css';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(function () {
    fetch('/api/tasks', {
      headers: {
        'Authorization': 'Bearer abc'
      }
    })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      return response.json();
    })
    .then(function (jsonData) {
      setTasks(jsonData.tasks || []); // Fallback to an empty array if tasks is not defined
    })
    .catch(function (error) {
      console.error('Error fetching tasks:', error);
      setTasks([]); // Fallback to an empty array in case of error
    });
  }, []);
  

  useEffect(
    function () {
      fetchTasks();
    },
    [fetchTasks]
  );

  function addTaskHandler(task) {
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer abc',
      },
      body: JSON.stringify(task),
    })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to post task');
      }
      return response.json();
    })
    .then(function (resData) {
      console.log(resData);
      // Optionally set state here if you need to update the UI after adding a task
    })
    .catch(function (error) {
      console.error('Error posting task:', error);
      // Optionally handle UI feedback here
    });
  }
  

  return (
    <div className='App'>
      <section>
        <NewTask onAddTask={addTaskHandler} />
      </section>
      <section>
        <button onClick={fetchTasks}>Show Tasks</button>
        <TaskList tasks={tasks} />
      </section>
    </div>
  );
}

export default App;
