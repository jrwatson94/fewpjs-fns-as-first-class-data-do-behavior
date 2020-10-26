/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time){
  let time_int = parseInt(time)
  if (time_int < 12) {
    return "Good Morning"
  } else if (time_int >= 12 && time_int < 17) {
    return "Good Afternoon"
  } else if (time_int > 5 && time_int <= 24){
    return "Good Evening"
  } else {
    return "Please enter a valid time."
  }
}

function displayMessage(string){
  let greeting = document.getElementById('greeting')
  greeting.innerText = string
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
