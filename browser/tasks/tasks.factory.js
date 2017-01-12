'use strict';

app.factory('TasksFactory', function(ToastFactory){
	var TasksFactory = {};

	/* Tasks is an array of objects, i.e.
		[
			{
				name: Wash puppies,
				checked: false,
				time: 1200
			}
		]

	*/
	TasksFactory.renderTasks = function () {
		var tasks = TasksFactory.getTasks();
		var currTime = new Date()
		tasks = tasks.map(function (task) {
			if (task.cdTimerStartedTime) {
				const startedTime = new Date(task.cdTimerStartedTime);
				const millisecs = Math.abs(currTime - startedTime)
				const secsPassed = millisecs / 1000;
				const secsTotal = task.cdTimerDur * 60;
				task.cdTimerProgress = (secsPassed / secsTotal) * 100;
				console.log("Progress is: " + task.cdTimerProgress);
				if (secsPassed >= secsTotal) {
					task.cdTimerStartedTime = null;
					task.checked = true;
					TasksFactory.checkTask(task);
				} 
			}
			return task;	
		});
		return tasks;
	}

	TasksFactory.getTasks = function () {
		if (!localStorage.getItem('tasks')) {
			localStorage.setItem('tasks', JSON.stringify([]));
			return TasksFactory.getTasks();
		}; 
		return JSON.parse(localStorage.getItem('tasks'));
	}

	TasksFactory.addTask = function (newTask) {
		var tasks = TasksFactory.getTasks();
		tasks.push(newTask);
		localStorage.setItem('tasks', JSON.stringify(tasks));
		ToastFactory.taskCreated();
	}

	TasksFactory.checkTask = function (checkedTask) {
		var tasks = TasksFactory.getTasks();
		tasks = tasks.map(function(task){
			if (task.name === checkedTask.name) {
				task.cdTimerStartedTime = null;
				task.checked = true;
			} 
			return task;
		});
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	TasksFactory.deleteTask = function (deletedTask) {
		var tasks = TasksFactory.getTasks();
		tasks = tasks.filter(function(task){
			return task.name !== deletedTask.name;
		});
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	TasksFactory.timeTask = function (timedTask) {
		var tasks = TasksFactory.getTasks();
		tasks = tasks.map(function(task){
			if (task.name === timedTask.name) {
				task.cdTimerStartedTime = new Date();
			} 
			return task;
		});
		localStorage.setItem('tasks', JSON.stringify(tasks));
		ToastFactory.taskRunning(timedTask.name);
	}

	TasksFactory.activateTask = function (activatedTask) {
		var tasks = TasksFactory.getTasks();
		tasks = tasks.map(function(task){
			if (task.name === activatedTask.name) {
				task.active = true;
			} 
			return task;
		});
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	return TasksFactory;
	
});

