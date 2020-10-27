//need to listen for submit event on form element

//we want to PREVENT the event from happening where the form goes to a different URL

//We need to invoke preventDefault() when our handler sees the event of the form being submited so we can prevent it.

//submit element node
const submit = document.querySelector('[type=submit]')
const text = document.getElementById('new-task-description')
const tasks = document.getElementById('tasks')
const priority = document.getElementById('priority')
const lis = tasks.querySelectorAll('li')

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  submit.addEventListener("click", function(event){
    addTask()
    event.preventDefault()
  })
});


//Adding task to TODO list and adding color to task from what drop box says
function addTask(){
  let li = document.createElement('li')
  li.innerText = text.value
  tasks.appendChild(li)
  if (priority.value === "red") {
    li.style.color = 'red'
    li.className = "high"
  } else if (priority.value === "yellow"){
    li.style.color = 'yellow'
    li.className = "medium"
  } else if (priority.value === "green"){
    li.style.color = 'green'
    li.className = "low"
  }
  text.value = ""
}
