
document.getElementById("btn1").addEventListener("click", function (event) {
  event.preventDefault();
  let taskNumber = document.getElementById("task-number");
  
 let selectNumber = document.getElementById("select-number");
 let taskValue = parseInt(taskNumber.innerText);
 let selectValue = parseInt(selectNumber.innerText);
  taskNumber.innerText = taskValue - 1;
  selectNumber.innerText = selectValue + 1;
  const info1 = document.getElementById("info1").innerText;
  const activityInfo = document.getElementById("activity");
  const div = document.createElement("div");
  
  div.innerHTML = `
   <p class="mt-3 bg-[#F4F7FF] rounded-lg p-3">You have Complete The ${info1} ${new Date().toLocaleTimeString()}</p>
  
  
  `
  const btn1 = document.getElementById("btn1");
  activityInfo.appendChild(div);
  btn1.disabled = true;
  btn1.classList.remove("bg-blue-600");
  btn1.classList.add("bg-blue-700", "opacity-20")
  alert("added successful")
  checkCongratulations();
  

});
document.getElementById("btn2").addEventListener("click", function (event) {
  event.preventDefault();
  let taskNumber = document.getElementById("task-number");
  
  let selectNumber = document.getElementById("select-number");
  let taskValue = parseInt(taskNumber.innerText);
  let selectValue = parseInt(selectNumber.innerText);
   taskNumber.innerText = taskValue - 1;
   selectNumber.innerText = selectValue + 1;
   const info2 = document.getElementById("info2").innerText;
   const activityInfo = document.getElementById("activity");
   const div = document.createElement("div");
   
   div.innerHTML = `
    <p class="mt-3 bg-[#F4F7FF] rounded-lg p-3">You have Complete The ${info2} ${new Date().toLocaleTimeString()}</p>
   
   
   `
   const btn2 = document.getElementById("btn2");
   activityInfo.appendChild(div);
   btn2.disabled = true;
   btn2.classList.remove("bg-blue-600");
   btn2.classList.add("bg-blue-700", "opacity-20")
   alert("added successful")
   checkCongratulations();

});
document.getElementById("btn3").addEventListener("click", function (event) {
  event.preventDefault();
  let taskNumber = document.getElementById("task-number");
  
  let selectNumber = document.getElementById("select-number");
  let taskValue = parseInt(taskNumber.innerText);
  let selectValue = parseInt(selectNumber.innerText);
   taskNumber.innerText = taskValue - 1;
   selectNumber.innerText = selectValue + 1;
   const info3 = document.getElementById("info3").innerText;
   const activityInfo = document.getElementById("activity");
   const div = document.createElement("div");
   
   div.innerHTML = `
    <p class="mt-3 bg-[#F4F7FF] rounded-lg p-3">You have Complete The ${info3} ${new Date().toLocaleTimeString()}</p>
   
   
   `
   const btn3 = document.getElementById("btn3");
   activityInfo.appendChild(div);
   btn3.disabled = true;
   btn3.classList.remove("bg-blue-600");
   btn3.classList.add("bg-blue-700", "opacity-20")
   alert("added successful")
   checkCongratulations();

});
document.getElementById("btn4").addEventListener("click", function (event) {
  event.preventDefault();
  let taskNumber = document.getElementById("task-number");
  
  let selectNumber = document.getElementById("select-number");
  let taskValue = parseInt(taskNumber.innerText);
  let selectValue = parseInt(selectNumber.innerText);
   taskNumber.innerText = taskValue - 1;
   selectNumber.innerText = selectValue + 1;
   const info4 = document.getElementById("info4").innerText;
   const activityInfo = document.getElementById("activity");
   const div = document.createElement("div");
   
   div.innerHTML = `
    <p class="mt-3 bg-[#F4F7FF] rounded-lg p-3">You have Complete The ${info4} ${new Date().toLocaleTimeString()}</p>
   
   
   `
   const btn4 = document.getElementById("btn4");
   activityInfo.appendChild(div);
   btn4.disabled = true;
   btn4.classList.remove("bg-blue-600");
   btn4.classList.add("bg-blue-700", "opacity-20")
   alert("added successful")
   checkCongratulations();
});
document.getElementById("btn5").addEventListener("click", function (event) {
  event.preventDefault();
  let taskNumber = document.getElementById("task-number");
  
  let selectNumber = document.getElementById("select-number");
  let taskValue = parseInt(taskNumber.innerText);
  let selectValue = parseInt(selectNumber.innerText);
   taskNumber.innerText = taskValue - 1;
   selectNumber.innerText = selectValue + 1;
   const info5 = document.getElementById("info5").innerText;
   const activityInfo = document.getElementById("activity");
   const div = document.createElement("div");
   
   div.innerHTML = `
    <p class="mt-3 bg-[#F4F7FF] rounded-lg p-3">You have Complete The ${info5} ${new Date().toLocaleTimeString()}</p>
   
   
   `
   const btn5 = document.getElementById("btn5");
   activityInfo.appendChild(div);
   btn5.disabled = true;
   btn5.classList.remove("bg-blue-600");
   btn5.classList.add("bg-blue-700", "opacity-20")
   alert("added successful")
   checkCongratulations();
});
document.getElementById("btn6").addEventListener("click", function (event) {
  event.preventDefault();
  let taskNumber = document.getElementById("task-number");
  
  let selectNumber = document.getElementById("select-number");
  let taskValue = parseInt(taskNumber.innerText);
  let selectValue = parseInt(selectNumber.innerText);
   taskNumber.innerText = taskValue - 1;
   selectNumber.innerText = selectValue + 1;
   const info6 = document.getElementById("info6").innerText;
   const activityInfo = document.getElementById("activity");
   const div = document.createElement("div");
   
   div.innerHTML = `
    <p class="mt-3 bg-[#F4F7FF] rounded-lg p-3">You have Complete The ${info6} ${new Date().toLocaleTimeString()}</p>
   
   
   `
   const btn2 = document.getElementById("btn2");
   activityInfo.appendChild(div);
   btn6.disabled = true;
   btn6.classList.remove("bg-blue-600");
   btn6.classList.add("bg-blue-700", "opacity-20")
   alert("added successful")
   checkCongratulations();
});
