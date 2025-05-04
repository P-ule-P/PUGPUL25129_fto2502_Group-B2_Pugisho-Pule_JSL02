// Task 1: Create a task with title, description, and status (todo, doing, done)
let task1 = prompt("Enter task 1 title:");
let description1 = prompt("Enter task 1 description:");

let status1;
while (true) {
  // Loop until a valid status is entered
  status1 = prompt("Enter task 1 status (todo, doing, done):");
  let statusCase = status1.toLowerCase();

  if (statusCase == "todo" || statusCase == "doing" || statusCase == "done") {
    // Check if the status is valid
    if (statusCase === "todo") {
      alert("No tasks completed, let's go to work!");
      console.log("No tasks completed, let's go to work!");
      break;
    } else if (statusCase === "doing") {
      alert("No tasks completed, let's go to work!");
      console.log("No tasks completed, let's go to work!");
      break;
    } else if (statusCase === "done") {
      alert(task1 + ": " + description1 + "," + " Status: done");
      console.log(task1 + ": " + description1 + "," + " Status: done");
      break;
    }
  } else {
    alert("Invalid status, please enter: 'todo', 'doing', or 'done'.");
  }
}

// Task 2: Create a task with title, description, and status (todo, doing, done)
let task2 = prompt("Enter task 2 title:");
let description2 = prompt("Enter task 2 description:");

let status2;
while (true) {
  // Loop until a valid status is entered
  status2 = prompt("Enter task 2 status (todo, doing, done):");
  let statusCases = status2.toLowerCase();

  if (
    // Check if the status is valid
    statusCases == "todo" ||
    statusCases == "doing" ||
    statusCases == "done"
  ) {
    if (statusCases === "todo") {
      alert("No tasks completed, let's go to work!");
      console.log("No tasks completed, let's go to work!");
      break;
    } else if (statusCases === "doing") {
      alert("No tasks completed, let's go to work!");
      console.log("No tasks completed, let's go to work!");
      break;
    } else if (statusCases === "done") {
      alert(task2 + ": " + description2 + "," + " Status: done");
      console.log(task2 + ": " + description2 + "," + " Status: done");
      break;
    }
  } else {
    alert("Invalid status, please enter: 'todo', 'doing', or 'done'.");
  }
}
