class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    printQueue() {
      return this.items.join(", ");
    }
  }
  
  const taskQueue = new Queue();
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    if (task) {
      taskQueue.enqueue(task);
      taskInput.value = '';
      displayTasks();
    }
  }
  
  function completeTask(index) {
    taskQueue.items.splice(index, 1);
    displayTasks();
  }
  
  function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskQueue.items.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task;
      li.className = 'taskItem'; // Adding the class name for styling
  
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.className = 'completeButton'; // Adding the class name for styling
      completeButton.onclick = () => {
        completeTask(index);
      };
  
      li.appendChild(completeButton);
      taskList.appendChild(li);
    });
  }
  
  // Initial display of tasks (if any)
  displayTasks();
  